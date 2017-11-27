var Phrase = require('../models/phrase');

exports.getByName = function(name, callback) {
    Phrase.find({ name: name }, callback);
}

exports.addPhrase = function(phrase, callback) {
    console.log('phrase', phrase);
    
    const nPhrase = new Phrase({
        name: phrase.name,
    });

    nPhrase.save(function(err) {
        callback(err, nPhrase);
    });
}

exports.deletePhrase = function(id, callback) {
    Phrase.remove({ _id: id }, callback);
}

exports.updatePhrase = function(phrase, callback) {
    Phrase.update({ _id: phrase._id }, phrase, { upsert: false }, callback);
}

exports.getAll = function(callback) {
    Phrase.find({}, callback);
}

exports.searchByName = function(name, callback) {
    Phrase.search(name, callback);
}