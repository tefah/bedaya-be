'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheme = require('./utils/followupFields');

const followupFields = {
  ...scheme.followupFields,
  patientID:{
    type: String,
    required: "kindly put the patient id"
  }
}

// console.log('lab1FIELDS: ', ch.lab1Fields)
const followupSchema = new Schema(followupFields);

module.exports = mongoose.model('Followup', followupSchema);