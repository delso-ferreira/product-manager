const connection = require('./connection');

const getAllProducts = async () => {
    const [allProducts] = await connection.execute('SELECT * FROM products');
    return allProducts;
};

const getProductById = async (id) => {
    const [[getById]] = await connection.execute(
        'SELECT * FROM products WHERE id = ?',
        [id],
    );
    return getById;
};

const createProduct = async (name) => {
    const [productName] = await connection.execute(`INSERT INTO 
    products (name) VALUES (?)`, [name]);
    return productName;
};

const updateProduct = async (name, id) => {
    await connection.execute(`UPDATE
    products SET name = ? WHERE id = ?`, [name, Number(id)]);

    const insertId = parseInt(id, 10);

    return {
        id: insertId,
        name,
    };
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
};