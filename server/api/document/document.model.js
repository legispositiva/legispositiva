'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocumentSchema = new Schema({
    documentId: String,
    timestamp: Date,
    articles: [ObjectId],
    ammends: ObjectId
})
