const { salesModel } = require('../models/index');

const getAllSales = async () => {
    const allSales = await salesModel.getAllSales();
    return allSales;
};

const getSalesById = async (id) => {
    const getById = await salesModel.getSalesById(id);
    if (getById.length === 0) {
        return ({ message: 'NOT_FOUND' });
    }
   return getById; 
};

const createNewSale = async (newSale) => {
    const newId = await salesModel.createNewSale(newSale);

    const data = { 
    id: newId, 
    itemsSold: newSale,
    };

    return { data };
};

module.exports = {
    getAllSales,
    getSalesById,
    createNewSale,
};