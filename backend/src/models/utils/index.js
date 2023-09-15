const snakeize = require('snakeize');

const formatColumns = (object) => Object.keys(snakeize(object)).join(',');

const formatPlaceholders = (object) => Object.keys(object).map(() => '?').join(',');

const formatNewColumns = (object) => Object.keys(snakeize(object))
  .map((key) => `${key} = ?`)
  .join(', ');

module.exports = {
    formatColumns,
  formatPlaceholders,
  formatNewColumns,
};