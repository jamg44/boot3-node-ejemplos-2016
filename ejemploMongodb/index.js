"use strict";

var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/cursonode', function(err, db) {
    if (err) {
        process.exit(1);
        return;
    }
    db.collection('agentes').find().toArray(function(err, docs) {
        if (err) {
            process.exit(1);
            return;
        }
        console.log(docs);
        db.close();
    });
});
