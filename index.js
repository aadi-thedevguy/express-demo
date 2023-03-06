const express = require('express');

const app = express();
app.use(express.urlencoded({extended: false}))

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    const {title, size} = req.body
    console.log(title,size);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
