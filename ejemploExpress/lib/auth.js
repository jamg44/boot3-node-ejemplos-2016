"use strict";

var auth = function (clave) {
    return function (req, res, next) {
        if (req.query.clave !== clave) {
            res.status(401).send('no estas autorizado, (clave=' + clave + ')');
            return;
        }
        next();
    }
};

module.exports = auth;