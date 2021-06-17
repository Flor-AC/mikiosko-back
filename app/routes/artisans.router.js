const express = require('express');
const router = express.Router();
var assert = require('assert');
const Artisan = require('../models/artisan');

router.get('/artisans',function(req,res){
    Artisan.find({}, function (err, artisan){
        assert.equal(err, null);
        res.json(artisan);
    });
});

router.post('/artisans', function(req, res){
    Artisan.create((req.body), function(err, artisan){
        assert.equal(err, null);
        res.json(artisan);
    });
});

router.put('/artisans/:id', function(req, res){
    Artisan.findOneAndUpdate(({_id: req.params.id}, req.body), function(err, craft){
        Artisan.findOne(({_id: req.params.id}), function(artisan){
            assert.equal(err, null);
            res.json(artisan);
        });
    });
});


router.delete('/artisans/:id', function(req, res){
    Artisan.findOneAndDelete(({_id: req.params.id}) ,function(err, artisan){
        assert.equal(err, null);
        res.json(artisan);
    });
});


router.get('/artisans/login', function(req, res){
    Artisan.findOne(({email: req.body.email, password: req.body.password}), function(err, artisan){
        assert.equal(err, null);
        res.json(artisan)
    });
});

module.exports = router;
