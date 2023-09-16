const { expect } = require('chai');
const sinon = require('sinon');
const { allProductsFromModel, getProductByIdModel, newProductModel } = require('../../mocks/productsMocks');
const { productsService } = require('../../../src/services/index');
const { productsController } = require('../../../src/controllers/index');

describe('Testes na camada controller', function () {
    it('Testando o retorno do controller de todos os produtos', async function () {
      sinon.stub(productsService, 'getAllProducts')
        .resolves(allProductsFromModel);

        const res = {
          status: sinon.stub().returnsThis(),
          json: sinon.stub(),
        };

        const req = {

        };

        await productsController.getAllProducts(req, res);
        
        expect(res.status.calledWith(200)).to.be.equal(true);
    });
    
    it('testa o retorno do productController na busca de um id apenas', async function () {
      sinon.stub(productsService, 'getByProductById')
       .resolves(getProductByIdModel);

      const req = {
        params: {
          id: 1,
        },
      };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await productsController.getProductById(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);      
    });

    it('testa o getById com erro', async function () {
      sinon.stub(productsService, 'getByProductById')
       .resolves({
        message: 'NOT_FOUND',
       });

      const req = {
        params: {
          id: 500,
        },
      };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await productsController.getProductById(req, res);

      expect(res.status.calledWith(404)).to.be.equal(true);
      /* expect(res.json).to.be.equal()       */
    });

    it('Testa a função createProduct na camada controller', async function () {
      sinon.stub(productsService, 'createProduct')
      .resolves(newProductModel);

      const req = {
        params: { id: 1 },
        body: {
          name: 'Palmeiras não tem mundial',
        },
      };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };

      await productsController.createProduct(req, res);

      expect(res.status.calledWith(201)).to.be.equal(true);
    });

    afterEach(function () {
        sinon.restore();
    });
});