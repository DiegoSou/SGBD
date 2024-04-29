const { Pool } = require('pg')

const pool = new Pool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: parseInt(process.env.DB_PORT || "5432")
});

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
});

module.exports = { query: (text, params) => pool.query(text, params) };
