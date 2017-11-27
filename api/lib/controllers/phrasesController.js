'use strict';
var phraseSvc = require('../services/phraseService');
var logger = require('../logger');

exports.getPhrase = function(req, res, next) {
    var name = req.params.name;
    phraseSvc.getByName(name, function(err, data) {
        if (err) {
            logger.error(err);
            return next(err);
        } else {
            res.send(data);
            return next();
        }
    });
};

exports.addPhrase = function(req, res, next) {
    var phrase = req.body;
    phraseSvc.addPhrase(phrase, function(err, data) {
        if (err) {
            logger.error(err);
            return next(err);
        } else {
            res.send({ message: 'added', data: data });
            return next();
        }
    });
};

exports.deletePhrase = function(req, res, next) {
    var id = req.params.id;
    phraseSvc.deletePhrase(id, function(err, data) {
        if (err) {
            logger.error(err);
            return next(err);
        } else {
            res.send({ message: 'deleted' });
            return next();
        }
    });
}

exports.updatePhrase = function(req, res, next) {
    var phrase = req.body;
    console.log('update phrases', phrase);
    phraseSvc.updatePhrase(phrase, function(err, data) {
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
    phraseSvc.getAll(function(err, data) {
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
    phraseSvc.searchByName(name, function(err, data) {
        if (err) {
            logger.error(err);
            return next(err);
        } else {
            res.send(data);
            return next();
        }
    });
}