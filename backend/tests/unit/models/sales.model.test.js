const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');

const { salesModel } = require('../../../src/models/index');
const { allSalesFromDB, allSalesFromModel, mockSalesByIDModel } = require('../../mocks/salesMocks');

describe('Testando camada model da Sales', function () {
    it('Testa a busca de todas as Sales', async function () {
        sinon.stub(connection, 'execute')
            .resolves(allSalesFromDB);

        const allSales = await salesModel.getAllSales();

        expect(allSales).to.deep.equal(allSalesFromModel);
    });

    it('Testa a busca de um id da Sale apenas', async function () {
        sinon.stub(connection, 'execute')
            .resolves([mockSalesByIDModel]);

        const oneSale = await salesModel.getSalesById(1);

        expect(oneSale).to.deep.equal(mockSalesByIDModel);
    });

    it('Testa o cadastro de uma nova venda', async function () {
        sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

        const response = await salesModel.createNewSale([
            {
                productId: 1,
                quantity: 1,
            },
            {
                productId: 1,
                quantity: 10,
            },
        ]);

        expect(response).to.be.equal(1);
        expect(response).to.be.a('number');
    });

    afterEach(function () {
        sinon.restore();
    });
}); 
