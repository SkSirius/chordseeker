var Key = require('../models/key');

exports.getByName = function(name, callback) {
    Key.find({ name: name }, callback);
}

exports.addKey = function(key, callback) {
    console.log('key', key);
    
    const nKey = new Key({
        name: key.name,
    });

    nKey.save(function(err) {
        callback(err, nKey);
    });
}

exports.deleteKey = function(id, callback) {
    Key.remove({ _id: id }, callback);
}

exports.updateKey = function(key, callback) {
    Key.update({ _id: key._id }, key, { upsert: false }, callback);
}

exports.getAll = function(callback) {
    Key.find({}, callback);
}

exports.searchByName = function(name, callback) {
    Key.search(name, callback);
}