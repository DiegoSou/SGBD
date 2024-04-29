
exports.create_new_product = async (db, { product_name, price, description, owner_email }) => {
    const { rows } = await db.query(
        "INSERT INTO products (product_name, price, description, owner_email) VALUES ($1, $2, $3, $4)",
        [product_name, price, description, owner_email]
    )
        
    return rows
}
