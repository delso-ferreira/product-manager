const { productsModel } = require('../models/index');

const getAllProducts = async () => { 
  const getProducts = await productsModel.getAllProducts();
  return getProducts;
};

const getByProductById = async (id) => {
  const getById = await productsModel.getProductById(id);
  if (!getById) {
    return { message: 'NOT_FOUND' };
  }
  return getById;
};

const createProduct = async (name) => {
  const productName = await productsModel.createProduct(name);
  
    const product = {
      id: productName.insertId,
      name,
    };

    return product;
};

module.exports = { 
  getAllProducts, 
  getByProductById,
  createProduct, 
};