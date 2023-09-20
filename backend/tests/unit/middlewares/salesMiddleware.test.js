const sinon = require('sinon');
const { expect } = require('chai');
/* const connection = require('../../../src/models/connection'); */
const { validateProduct, validateNewSale } = require('../../../src/middlewares/sales.middleware');
const { productsModel } = require('../../../src/models/index');
const { getProductByIdModel } = require('../../mocks/productsMocks');

describe('Testando middleware da rota sales', function () {
    it('Deve confirmar o retorno verdadeiro um id', async function () {
        sinon.stub(productsModel, 'getProductById').resolves(getProductByIdModel);

        const id = 1;

        const result = await validateProduct(id);

        expect(result).to.be.equal(true);
    });
    it('Deve verificar que é necessário um id', async function () {
        const next = sinon.stub().returns();

        const req = {
            body: [{
                productId: '',
            }],
        };

        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        validateNewSale(req, res, next);        
        expect(res.status.calledWith(400)).to.be.equal(true);
        expect(res.json.calledWith({ message: '"productId" is required' }));
    });
     it('Deve verificar que é necessário a quantity', async function () {
        const next = sinon.stub().returns();

        const req = {
            body: [{
                quantity: '',
            }],
        };

        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub(),
        };

        validateNewSale(req, res, next);        
        expect(res.status.calledWith(400)).to.be.equal(true);
        expect(res.json.calledWith({ message: '"quantity" is required' }));
    });         
});