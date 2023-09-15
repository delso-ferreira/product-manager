const { salesService } = require('../services');

const findallSales = async (_req, res) => {
    const allSales = await salesService.getAllSales();
    res.status(200).json(allSales);
};

const getSalesById = async (req, res) => {
    const { id } = req.params;
    const getById = await salesService.getSalesById(id);
     if (getById.message === 'NOT_FOUND') {
        return res.status(404).json({ message: 'Sale not found' });
     }
     res.status(200).json(getById);
};

const createNewSale = async (req, res) => {
    const newSale = req.body;    

    const response = await salesService.createNewSale(newSale);

    res.status(201).json(response);
};

module.exports = {
    findallSales,
    getSalesById,
    createNewSale,
};