// request.query
// request.params
// request.body
import { getProducts, findProducts, upsertProducts, deleteProducts } from "./products-memory"

async function products_routing (fastify: any, options: any) 
{
    fastify.get('/products', async (request: any, reply: any) => {
        reply.send({ result: await getProducts() })
    })

    fastify.get('/products/find', async (request: any, reply: any) => {
        reply.send({ result: await findProducts(request.query) })
    })

    fastify.post('/products/upsert', async (request: any, reply: any) => {
        reply.send({ result: await upsertProducts(request.body) })
    })

    fastify.post('/products/delete/:productId', async (request: any, reply: any) => {
        reply.send({ result: deleteProducts(request.params) })
    })
}
  
//ESM
export default products_routing;
