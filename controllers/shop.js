
const path = require('path');
const rootDir = require('../util/path');

const showHomePage =  (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  }
  
const showContactPage = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
  }
  
const showSuccessPage = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
  }

module.exports = {
    showHomePage,
    showContactPage,
    showSuccessPage
}