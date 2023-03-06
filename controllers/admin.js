const path = require('path');
const rootDir = require('../util/path');

const showProductPage =  (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

const addProduct = (req, res) => {
  console.log(req.body);
  res.redirect('/');
}

module.exports = {
showProductPage,
addProduct,
}