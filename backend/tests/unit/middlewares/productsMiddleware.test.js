const sinon = require('sinon');
const { expect } = require('chai');
const { validateProductName } = require('../../../src/middlewares/products.middleware');

describe('Testa os middlewares da aplicação', function () {
    it('Testando as validações de Produtos', function () {
        const next = sinon.stub().returns();

        const req = {
            body: { 
                name: 'Produto',
            },
        };

        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        validateProductName(req, res, next);

        expect(next.calledWith()).to.be.equal(true);
    }); 

    it('Testando envio de produto sem nome da rota post Products', async function () {
        const next = sinon.stub().returns();

        const req = {
            body: {},
        };
      
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
      
        validateProductName(req, res, next);
      
        expect(res.status.calledWith(400)).to.be.equal(true);
        expect(res.json.calledWith({ message: '"name" is required' })).to.be.equal(true);
    }); 

    it('Testando o envio de nome com tamanho menor que 5 caracteres', async function () {
        const next = sinon.stub().returns();
    
        const req = {
            body: {
                name: 'P',
            },
        };
    
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };
    
        validateProductName(req, res, next);
    
        expect(res.status.calledWith(422)).to.be.equal(true);
        expect(res.json.calledWith({ message: '"name" length must be at least 5 characters long' })).to.be.equal(true);
    });

    afterEach(function () {
        sinon.restore();
    });
});
