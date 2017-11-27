'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ChordSchema = require('./chord');

var KeySchema = new Schema({
    name: String,
    key: [],
    includes: []
});


KeySchema.index({ name: 1 });

KeySchema.statics.search = function(name, cb) {
    return this.where('name', new RegExp(name, 'i')).sort({ _id: -1 }).exec(cb);
};

module.exports = mongoose.model('Key', KeySchema);