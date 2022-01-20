const express = require('express');
const articleROuter = require('./routes/articles')
const app = express();

app.set('view engine' , 'ejs');

app.use('/articles',articleROuter);

//req et res sont request et response
//render permet de renvoyer le html
app.get('/' , (req,res) => {
    const articles = [{
        titre:'Article test',
        creeLe:Date.now(),
        description: 'Description test'

    }]
    res.render('index', {articles: 'Bonjour'})
});

app.listen(5000);