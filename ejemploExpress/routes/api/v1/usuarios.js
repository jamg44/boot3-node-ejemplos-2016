"use strict";

var jwt = require('jsonwebtoken');
var config = require('../../../local_config');

var express = require('express');
var router = express.Router();

var Usuario = require('mongoose').model('Usuario');

router.post('/authenticate', function(req, res) {
    var user = req.body.user;
    var pass = req.body.pass;

    console.log(user);

    Usuario.findOne({name: user}).exec(function(err, user) {
        if (err) {
            return res.status(500).json({success: false, error: err});
        }
        if (!user) {
            return res.status(401).json({success: false, error: 'Auth failed. User not found.'});
        }

        if (user.pass !== pass) {
            return res.status(401).json({success: false, error: 'Auth failed. invalid password.'});
        }

        var token = jwt.sign({ id: user._id}, config.jwt.secret, {
            expiresIn: '2 days'
        });

        res.json({success: true, toke: token});
    });
    
});

module.exports = router;