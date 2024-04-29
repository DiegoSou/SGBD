
exports.index_products = async (db) => {
    const { rows } = await db.query(
        "SELECT * FROM products ORDER BY product_name ASC"
    )
    
    return rows
}
