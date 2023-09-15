const connection = require('./connection');
const { formatColumns, formatPlaceholders } = require('./utils/index');

const getAllSales = async () => {
    const [allSales] = await connection.execute(`
    SELECT sl.id AS saleId, sl.date AS date, spr.product_id AS productId, spr.quantity  
    FROM sales AS sl  
    INNER JOIN sales_products AS spr ON sl.id = spr.sale_id
    ORDER BY sl.id, spr.product_id;
    `);
    return allSales;
};

const getSalesById = async (id) => {
    const [salesById] = await connection.execute(
        `SELECT sales.date, sales_products.product_id AS productId, quantity
        FROM sales 
        INNER JOIN sales_products ON sales.id = sales_products.sale_id
        WHERE sales.id = ?;        
        `,
    [id],
    );

    console.log(salesById);
    return salesById;
};

const createNewSale = async (newSale) => {
    const [{ id }] = await connection
    .execute('INSERT INTO sales (date) VALUE (?);', [new Date()]);

    const getSales = newSale.map(async (sale) => {
    const salePlaceholders = formatPlaceholders(sale);
    const saleColumns = formatColumns(sale);
    const salequery = await connection.execute(
      `INSERT INTO sales_products (sale_id, ${saleColumns}) VALUES (?, ${salePlaceholders})`,
         [id, ...Object.values(sale)],
      );

    return salequery;
  });

  await Promise.all(getSales);
  return id;
};

module.exports = {
    getAllSales,
    getSalesById,
    createNewSale,
};