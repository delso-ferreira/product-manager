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

const updateProduct = async (name, identificador) => {
  const productUpdate = await productsModel.updateProduct(name, identificador);

  const allProducts = await getAllProducts();

  const confirmId = allProducts.find(({ id }) => id === Number(identificador));
  if (!confirmId) {
    return { status: 404, message: 'Product not found' };
  }
  return productUpdate;
};

module.exports = {
  getAllProducts,
  getByProductById,
  createProduct,
  updateProduct,
};