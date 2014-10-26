'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var DocumentSchema = new Schema({

    documentId: {
        type: String,
        required: true,
        index: true
    },

    timestamp: {
        type: Date,
        required: true,
        index: true
    },

    title: {
        type: String,
        required: true
    },

    articles: [
        { type: ObjectId, ref: 'Article' }
    ],

    _ammends: {
        type: ObjectId,
        ref: 'Document',
        required: true,
        index: true
    },

    _creator: {
        type: ObjectId,
        ref: 'User',
        required: true,
        index: true
    }

})

/**
 * Virtuals
 */
// DocumentSchema
//   .virtual('')

module.exports = mongoose.model('Document', DocumentSchema)
