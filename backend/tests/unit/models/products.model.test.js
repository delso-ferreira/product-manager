const { expect } = require('chai');
const sinon = require('sinon');

const {
    allProductsFromModel,
    allProductsFromDB,
    newProductModel,
} = require('../../mocks/productsMocks');

const connection = require('../../../src/models/connection');

const { productsModel } = require('../../../src/models/index');
const { updateProduct } = require('../../../src/models/products.model');

describe('Testa model', function () {
    it('testa a busca de todos os produtos', async function () {
        sinon.stub(connection, 'execute')
            .resolves(allProductsFromDB);

        const allProducts = await productsModel.getAllProducts();
        expect(allProducts).to.deep.equal(allProductsFromModel);
    });

    it('testa a busca do produto por id', async function () {
        sinon.stub(connection, 'execute')
            .resolves(allProductsFromDB);

        const getById = await productsModel.getProductById(1);
        expect(getById).to.deep.equal(allProductsFromModel[0]);
    });

    it('teste a função createProduct', async function () {
        sinon.stub(connection, 'execute')
            .resolves([newProductModel]);

        const newProduct = await productsModel.createProduct('Palmeiras não tem mundial');
        expect(newProduct).to.deep.equal(newProductModel);
    });

    it('testa a função updateProduct', async function () {
        const testId = 1;
        const testName = 'Product Name';

        const test = {
            id: testId,
            name: testName,
        };

        sinon.stub(connection, 'execute').resolves(test);

        const result = await updateProduct(testName, testId);

        expect(result).to.be.deep.equal(test);
    });

    afterEach(function () {
        sinon.restore();
    });
});