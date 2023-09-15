const { expect } = require('chai');
const sinon = require('sinon');
const { allSalesFromModel } = require('../../mocks/productsMocks');
const { salesModel } = require('../../../models/index');
const { salesService } = require('../../../services/index');
const { mockNewSaleFromDB, mockNewSaleFromModel } = require('../../mocks/salesMocks');

describe('testa a camada service', function () {
    it('Testa a busca de todas as Sales', async function () {
        sinon.stub(salesModel, 'getAllSales')
        .resolves(allSalesFromModel);

        const getProducts = await salesService.getAllSales();

        expect(getProducts).to.deep.equal(allSalesFromModel);
    });

    it('testa o erro ao buscar todas as sales', async function () {
        sinon.stub(salesModel, 'getSalesById') 
         .resolves([]);
 
         const productId = await salesService.getSalesById(500);
 
         expect(productId).to.deep.equal({ message: 'NOT_FOUND' });
     });

     it('Testa id incorreto e mensagem de erro', async function () {
        sinon.stub(salesModel, 'getSalesById').resolves([]);
    
        const response = await salesService.getSalesById(555);
    
        expect(response).to.deep.equal({ message: 'NOT_FOUND' });
        expect(response).to.be.an('object');
      });
    
      it('Testa nova venda', async function () {
        sinon.stub(salesModel, 'createNewSale').resolves(mockNewSaleFromModel);

        const newData = { 
          id: mockNewSaleFromDB, 
          itemsSold: [{ productId: 1, quantity: 1 }, { productId: 1, quantity: 10 }] };
        const dataService = await salesService.createNewSale([{
           productId: 1, quantity: 1 }, { productId: 1, quantity: 10 }]);
        
        expect(dataService.data).to.be.equal(newData);
      });
     
    afterEach(function () {
        sinon.restore();
    });
});