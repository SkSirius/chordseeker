'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChordSchema = new Schema({
    name: String,
    image: String,
    description: String,
    position: String,
    alias: String,
    created: Date,
    category: String
});

ChordSchema.index({ name: 1 });

ChordSchema.statics.search = function(name, cb) {
    return this.where('name', new RegExp(name, 'i')).sort({ _id: -1 }).exec(cb);
};

module.exports = mongoose.model('Chord', ChordSchema);

