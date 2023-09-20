const route = require('express').Router();
const { productsController } = require('../controllers');
const { validateProductName, validateProduct } = require('../middlewares/products.middleware');

route.get('/', productsController.getAllProducts);
route.get('/:id', productsController.getProductById);
route.post('/', validateProductName, productsController.createProduct);
route.put('/:id', validateProductName, validateProduct, productsController.updateProduct);

module.exports = route;