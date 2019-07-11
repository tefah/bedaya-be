'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheme = require('./utils/lab1Fields');

const lab1Fields = {
  ...scheme.lab1Fields,
  patientID:{
    type: String,
    required: "kindly put the patient id"
  }
}

// console.log('lab1FIELDS: ', ch.lab1Fields)
const lab1Schema = new Schema(lab1Fields);

module.exports = mongoose.model('Lab1', lab1Schema);