const express = require('express');
const app = express();
var cors = require('cors');
const PORT = process.env.PORT || 5000

const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/mikiosko'); //Local
mongoose.connect('mongodb+srv://userapi:12334@cluster0.5bk8s.mongodb.net/mikiosko'); //Produccion

mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/api', require('./routes/crafts.router.js'));
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
});

app.use('/api', require('./routes/costumer.router.js'));
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
});

app.use('/api', require('./routes/artisans.router.js'));
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
