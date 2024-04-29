const server = require('fastify')()
const db = require('../db/connection.js');
const { create_new_product } = require('../domain/create_new_product')
const { index_products } = require('../domain/index_products')
const { search_product_by_product_name } = require('../domain/search_product_by_product_name')


server.get('/products', async (request, reply) => {
    const result = await index_products(db)
    return { message: result }
})

server.get('/products/:name', async (request, reply) => { 
    const result = await search_product_by_product_name(db, request.params.name)
    return { message: result }
})

server.post('/products', async (request, reply) => {
    const result = await create_new_product(db, request.body)
    return { message: result }
})


server.listen({ host: '0.0.0.0', port: process.env.SERVICE_PORT }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})
