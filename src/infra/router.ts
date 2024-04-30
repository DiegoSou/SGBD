import fastify from 'fastify'
import products_routing from './products-routing'

const server = fastify()

server.register(products_routing)

const start_server = async () => {
    try {
        await server.listen({ host: '0.0.0.0', port: 5000 })
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

export { start_server }
