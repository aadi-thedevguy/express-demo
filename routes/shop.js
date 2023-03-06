const express = require('express');
const router = express.Router();

const {
  showHomePage,
  showContactPage,
  showSuccessPage
} = require("../controllers/shop")

router.get('/', showHomePage);

router.get('/contactus', showContactPage);

router.post('/success', showSuccessPage);

module.exports = router;
