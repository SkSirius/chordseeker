'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhraseSchema = new Schema({
    name: String,
    category: String,
    image: String
});

PhraseSchema.index({ name: 1 });

PhraseSchema.statics.search = function(name, cb) {
    return this.where('name', new RegExp(name, 'i')).sort({ _id: -1 }).exec(cb);
};

module.exports = mongoose.model('Phrase', PhraseSchema);