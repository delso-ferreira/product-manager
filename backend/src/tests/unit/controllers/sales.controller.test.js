const { expect } = require('chai');
const sinon = require('sinon');
const { allSalesFromModel } = require('../../mocks/salesMocks');
const { salesService } = require('../../../services/index');
const { salesController } = require('../../../controllers/index');

describe('Testes na camada controller', function () {
    it('Testa o retorno da busca de AllSales', async function () {
      sinon.stub(salesService, 'getAllSales')
        .resolves(allSalesFromModel);

        const res = {
          status: sinon.stub().returnsThis(),
          json: sinon.stub(),
        };

        const req = {

        };

        await salesController.findallSales(req, res);
        
        expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('Testando resposta de nova venda', async function () {
      sinon.stub(salesService, 'createNewSale').resolves({});
  
      const req = { 
      body: {
      products: [{
      productId: 1, 
      quantity: 1,
      }, 
      { 
      productId: 2,
      quantity: 10, 
    }] } };
      
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
  
      await salesController.createNewSale(req, res);
  
      expect(res.status.calledWith(201)).to.be.equal(true);
    });
});