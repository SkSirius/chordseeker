var Chord = require('../models/chord');

exports.getByName = function(name, callback) {
    Chord.find({ name: name }, callback);
}

exports.addChord = function(chord, callback) {
    console.log('chord', chord);
    
    const nChord = new Chord({
        name: chord.name,
        description: chord.description,
        image: chord.image
    });

    nChord.save(function(err) {
        callback(err, nChord);
    });
}

exports.deleteChord = function(id, callback) {
    Chord.remove({ _id: id }, callback);
}

exports.updateChord = function(chord, callback) {
    Chord.update({ _id: chord._id }, chord, { upsert: false }, callback);
}

exports.getAll = function(callback) {
    Chord.find({}, callback);
}

exports.searchByName = function(name, callback) {
    Chord.search(name, callback);
}