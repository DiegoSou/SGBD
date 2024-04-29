const crypto = require('crypto')
const { CRYPTO_SECRET } = process.env


const encrypt = (value) => {
    const iv = Buffer.from(crypto.randomBytes(16))

    // chave secret utilizada para criptografar
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(CRYPTO_SECRET), iv)

    let encrypted = cipher.update(value)
    encrypted = Buffer.concat([ encrypted, cipher.final() ])

    return `${iv.toString('hex')}:${encrypted.toString('hex')}`
}


const decrypt = (value) => {
    const [iv, encrypted] = value.split(':')
    const ivBuffer = Buffer.from(iv, 'hex')

    // chave secret utilizada para descriptografar
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(CRYPTO_SECRET), ivBuffer)

    let content = decipher.update(Buffer.from(encrypted, 'hex'))
    content = Buffer.concat([ content, decipher.final() ])

    return content.toString();
}


module.exports = { encrypt, decrypt }
