const dateMockValue = '2023-08-16T20:53:24.000Z';

const allSalesFromDB = [
  [
    {
      saleId: 1,
      date: dateMockValue,
      productId: 1,
      quantity: 5,
    },
    {
      saleId: 1,
      date: dateMockValue,
      productId: 2,
      quantity: 10,
    },
    {
      saleId: 2,
      date: dateMockValue,
      productId: 3,
      quantity: 15,
    },
  ]];

  const allSalesFromModel = [
    
      {
        saleId: 1,
        date: dateMockValue,
        productId: 1,
        quantity: 5,
      },
      {
        saleId: 1,
        date: dateMockValue,
        productId: 2,
        quantity: 10,
      },
      {
        saleId: 2,
        date: dateMockValue,
        productId: 3,
        quantity: 15,
      },
    ];
  
/* const mockSalesByID = [
  [{
    id: 1,
    date: dateMockValue,
  },
  { saleId: 1,
  date: dateMockValue,
  },
]];   */

const mockSalesByIDModel = [{
    id: 1,
    date: dateMockValue,
  },
  { saleId: 1,
  date: dateMockValue,
  },
  ];

  const mockNewSaleFromDB = 1;

  const mockNewSaleFromModel = 1;

module.exports = {
    allSalesFromDB,
    allSalesFromModel,
    mockSalesByIDModel,
    mockNewSaleFromDB,
    mockNewSaleFromModel,
  };