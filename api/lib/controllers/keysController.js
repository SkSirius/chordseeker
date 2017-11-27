'use strict';
var keySvc = require('../services/keyService');
var logger = require('../logger');

exports.getKey = function(req, res, next) {
    var name = req.params.name;
    keySvc.getByName(name, function(err, data) {
        if (err) {
            logger.error(err);
            return next(err);
        } else {
            res.send(data);
            return next();
        }
    });
};

exports.addKey = function(req, res, next) {
    var key = req.body;
    keySvc.addKey(key, function(err, data) {
        if (err) {
            logger.error(err);
            return next(err);
        } else {
            res.send({ message: 'added', data: data });
            return next();
        }
    });
};

exports.deleteKey = function(req, res, next) {
    var id = req.params.id;
    keySvc.deleteKey(id, function(err, data) {
        if (err) {
            logger.error(err);
            return next(err);
        } else {
            res.send({ message: 'deleted' });
            return next();
        }
    });
}

exports.updateKey = function(req, res, next) {
    var key = req.body;
    console.log('update keys', key);
    keySvc.updateKey(key, function(err, data) {
        if (err) {
            logger.error(err);
            return next(err);
        } else {
            console.log('updated data', data);

            res.send({ message: 'updated' });
            return next();
        }
    });
}

exports.getAll = function(req, res, next) {
    keySvc.getAll(function(err, data) {
        if (err) {
            logger.error(err);
            return next(err);
        } else {
            res.send(data);
            return next();
        }
    });
}

exports.searchByName = function(req, res, next) {
    var name = req.params.name;
    keySvc.searchByName(name, function(err, data) {
        if (err) {
            logger.error(err);
            return next(err);
        } else {
            res.send(data);
            return next();
        }
    });
}