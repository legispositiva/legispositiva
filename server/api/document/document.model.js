'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var DocumentSchema = new Schema({
    documentId: String,
    timestamp:  Date,
    title:      String,
    articles:   [
        { type: ObjectId, ref: 'Article' }
    ],
    _ammends:   { type: ObjectId, ref: 'Document' },
    _creator:   { type: ObjectId, ref: 'User' }
})

/**
 * Virtuals
 */
// DocumentSchema
//   .virtual('')

module.exports = mongoos.model('Document', DocumentSchema)
