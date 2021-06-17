const express = require('express');
const router = express.Router();
var assert = require('assert');
const Craft = require('../models/craft');

router.get('/crafts',function(req,res){
    Craft.find({}, function (err, crafts){
        assert.equal(err, null);
        res.json(crafts);
    });
});

router.post('/crafts', function(req, res){
    Craft.create((req.body), function(err, craft){
        assert.equal(err, null);
        res.json(craft);
    });
});

router.put('/crafts/:id', function(req, res){
    Craft.findOneAndUpdate(({_id: req.params.id},req.body), function(err, craft){
        Craft.findOne(({_id: req.params.id}), function(craft){
            assert.equal(err, null);
            res.json(craft);
        });
    });
});
router.delete('/crafts/:id', function(req, res){
    Craft.findOneAndDelete(({_id: req.params.id}) ,function(err, craft){
        assert.equal(err, null);
        res.json(craft);
    });
});

module.exports = router;
