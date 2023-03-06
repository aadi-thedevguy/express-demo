const express = require('express');
const router = express.Router();
const {showProductPage,addProduct} = require("../controllers/admin")

// /admin/add-product => GET
router.get('/add-product',showProductPage);

// /admin/add-product => POST
router.post('/add-product', addProduct);

module.exports = router;
