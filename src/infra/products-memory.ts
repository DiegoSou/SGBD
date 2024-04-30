import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


// getProducts
export async function getProducts() 
{
    const products = prisma.product.findMany();
    return products
}
 
// findProducts
export async function findProducts({ product_name, owner_email }: IFindProductsQueryParams) 
{
    const products = await prisma.product.findMany({
        where: {
            OR: [
                { 
                    product_name: { 
                        contains: product_name,
                    } 
                },
                {
                    owner_email: {
                        contains: owner_email,
                    },
                },
            ],
        }
    })
    return products
}

// upsertProducts
export async function upsertProducts({ productId, product_name, description, price, owner_email }: IUpsertProductsBodyParams)
{
    try {
        if (productId === undefined)
            throw new Error("Id not specified, creating user...");
        
        const result = await prisma.product.update({
            where: { productId: Number(productId) },
            data: {
                product_name,
                description,
                price,
                owner_email
            },
        })
    
        return result
    } catch (error: any) {
        console.log(error.message)

        const product = await prisma.product.create({
            data: {
                product_name,
                description,
                price,
                owner_email
            },
        })

        return product
    }
}

// deleteProducts
export async function deleteProducts({ productId }: IDeleteProductsHeaderParams)
{
    const product = await prisma.product.delete({
        where: { productId: Number(productId) },
    })
    return product
}


// Interfaces


interface IFindProductsQueryParams {
    product_name: string | undefined
    owner_email: string | undefined
}

interface IUpsertProductsBodyParams {
    productId: string | undefined
    product_name: string
    description: string | undefined
    price: number | undefined
    owner_email: string
}

interface IDeleteProductsHeaderParams {
    productId: string
}
