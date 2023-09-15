const productsModel = require('../models/products.model');

const validateProduct = async (id) => {
    const product = await productsModel.getProductById(id);
    return !!product;

    // !! transforma valor em booleano
  };

const validateNewSale = async (req, res, next) => {
    const { body } = req;
  
    if (body.some((sale) => sale.productId === undefined)) {
      return res.status(400).json({ message: '"productId" is required' });
    }
  
    if (body.some((sale) => sale.quantity === undefined)) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
  
    if (body.some((sale) => sale.quantity < 1)) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  
    const productIds = body.map((item) => item.productId);
    const productExists = await Promise.all(productIds.map(validateProduct));
  
    if (productExists.includes(false)) {
      return res.status(404).json({ message: 'Product not found' });
    }
  
    next();
  };
  
  module.exports = {
    validateNewSale,
  };