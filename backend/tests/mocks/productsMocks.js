const allProductsFromDB = [
[{
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do Capitão América',
    },    
]];

const allProductsFromModel = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const getProductByIdModel = {
    id: 1,
    name: 'Martelo de Thor',
};

const newProductModel = {
    id: 1,
    name: 'Palmeiras não tem mundial',
};

const productUpdatedModel = {
    id: 1,
    name: 'Capa de invisibilidade',
};

const productServiceUpdate = {
  status: 'SUCCESSFUL', 
  data: productUpdatedModel,
};

  module.exports = { 
    allProductsFromModel, 
    allProductsFromDB, 
    getProductByIdModel, 
    newProductModel,
    productUpdatedModel,
    productServiceUpdate,
  };