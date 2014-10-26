'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var SectionSchema = new Schema({

    sectionId: {
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

    content: {
        type: String,
        required: true
    }

    _ammends: {
        type: ObjectId,
        ref: 'Section',
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
// SectionSchema
//   .virtual('')

module.exports = mongoose.model('Section', SectionSchema)
