const { productsService } = require('../services');

const getAllProducts = async (_req, res) => {
    const getProducts = await productsService.getAllProducts();
    res.status(200).json(getProducts);
};

const getProductById = async (req, res) => {
    const { id } = req.params;    

    const getById = await productsService.getByProductById(id);
    if (getById.message === 'NOT_FOUND') {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(getById);
};

const createProduct = async (req, res) => {
    const { name } = req.body;

const newProduct = await productsService.createProduct(name);

return res.status(201).json(newProduct);
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
};
