const express = require('express');
const router = express.Router();
var assert = require('assert');
const Costumer = require('../models/costumer');

router.get('/costumers',function(req,res){
    Costumer.find({}, function (err, costumer){
        assert.equal(err, null);
        res.json(costumer);
    });
});

router.post('/costumers', function(req, res){
    Costumer.create((req.body), function(err, costumer){
        assert.equal(err, null);
        res.json(costumer);
    });
});

router.put('/costumers/:id', function(req, res){
    Costumer.findOneAndUpdate(({_id: req.params.id},req.body), function(err, craft){
        Costumer.findOne(({_id: req.params.id}), function(costumer){
            assert.equal(err, null);
            res.json(costumer);
        });
    });
});
router.delete('/costumers/:id', function(req, res){
    Costumer.findOneAndDelete(({_id: req.params.id}) ,function(err, costumer){
        assert.equal(err, null);
        res.json(costumer);
    });
});


router.get('/costumers/login', function(req, res){
    Costumer.findOne(({email: req.body.email, password: req.body.password}), function(err, costumer){
        assert.equal(err, null);
        res.json(costumer)
    });
});

module.exports = router;
