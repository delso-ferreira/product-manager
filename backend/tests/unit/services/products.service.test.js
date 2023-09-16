const { expect } = require('chai');
const sinon = require('sinon');
const { allProductsFromModel, getProductByIdModel, newProductModel } = require('../../mocks/productsMocks');
const { productsModel } = require('../../../src/models/index');
const { productsService } = require('../../../src/services/index');

describe('testa a camada service', function () {
    it('teste da função camada service', async function () {
        sinon.stub(productsModel, 'getAllProducts')
        .resolves(allProductsFromModel);

        const getProducts = await productsService.getAllProducts();

        expect(getProducts).to.deep.equal(allProductsFromModel);
    });

    it('testa o getById', async function () {
       sinon.stub(productsModel, 'getProductById') 
        .resolves(getProductByIdModel);

        const getProdcutById = await productsService.getByProductById(1);

        expect(getProdcutById).to.deep.equal(getProductByIdModel);
    });

    it('testa o erro do getById', async function () {
        sinon.stub(productsModel, 'getProductById') 
         .resolves();
 
         const productId = await productsService.getByProductById(500);
 
         expect(productId).to.deep.equal({ message: 'NOT_FOUND' });
     });

     it('testa a função createProduct na camada Service', async function () {
        sinon.stub(productsModel, 'createProduct')
        .resolves(newProductModel);

        const newProduct = await productsModel.createProduct(1, 'Palmeiras não tem mundial');
        expect(newProduct.name).to.deep.equal('Palmeiras não tem mundial');
        expect(newProduct.id).to.deep.equal(1);
     });
    afterEach(function () {
        sinon.restore();
    });
});