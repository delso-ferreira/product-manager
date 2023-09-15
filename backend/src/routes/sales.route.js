const route = require('express').Router();
const { salesController } = require('../controllers');
const { validateNewSale } = require('../middlewares/sales.middleware');

route.get('/', salesController.findallSales); 
route.get('/:id', salesController.getSalesById);
route.post('/', validateNewSale, salesController.createNewSale);

module.exports = route;