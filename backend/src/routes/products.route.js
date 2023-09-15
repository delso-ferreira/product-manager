const route = require('express').Router();
const { productsController } = require('../controllers');
const { validateProductName } = require('../middlewares/products.middleware');

route.get('/', productsController.getAllProducts);
route.get('/:id', productsController.getProductById);
route.post('/', validateProductName, productsController.createProduct);

module.exports = route;