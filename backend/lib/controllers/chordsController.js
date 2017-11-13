'use strict';
var chordSvc = require('../services/chordService');
var logger = require('../logger');

exports.getChord = function(req, res, next) {
    var name = req.params.name;
    chordSvc.getByName(name, function(err, data) {
        if (err) {
            logger.error(err);
            return next(err);
        } else {
            res.send(data);
            return next();
        }
    });
};

exports.addChord = function(req, res, next) {
    var chord = req.body;
    chordSvc.addChord(chord, function(err, data) {
        if (err) {
            logger.error(err);
            return next(err);
        } else {
            res.send({ message: 'added', data: data });
            return next();
        }
    });
};

exports.deleteChord = function(req, res, next) {
    var id = req.params.id;
    chordSvc.deleteChord(id, function(err, data) {
        if (err) {
            logger.error(err);
            return next(err);
        } else {
            res.send({ message: 'deleted' });
            return next();
        }
    });
}

exports.updateChord = function(req, res, next) {
    var chord = req.body;
    console.log('update chords', chord);
    chordSvc.updateChord(chord, function(err, data) {
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
    chordSvc.getAll(function(err, data) {
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
    chordSvc.searchByName(name, function(err, data) {
        if (err) {
            logger.error(err);
            return next(err);
        } else {
            res.send(data);
            return next();
        }
    });
}