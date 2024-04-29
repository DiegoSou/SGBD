
exports.search_product_by_product_name = async (db, { product_name }) => {
    const { rows } = await db.query(
        "SELECT * FROM products WHERE product_name LIKE $1 ORDER BY product_name ASC",
        [product_name]
    )
        
    return rows
}
