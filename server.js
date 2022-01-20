const express = require('express');
const articleROuter = require('./routes/articles')
const app = express();

app.set('view engine' , 'ejs');

app.use('/articles',articleROuter);

//req et res sont request et response
//render permet de renvoyer le html
app.get('/' , (req,res) => {
    res.render('index')
});

app.listen(5000);