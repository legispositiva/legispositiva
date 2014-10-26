'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var ArticleSchema = new Schema({

    articleId: {
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

    sections: [
        { type: ObjectId, ref: 'Section' }
    ],

    _ammends: {
        type: ObjectId,
        ref: 'Article',
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
// ArticleSchema
//   .virtual('')

module.exports = mongoose.model('Article', ArticleSchema)
