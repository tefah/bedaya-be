'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheme = require('./utils/lab4Fields');

const lab4Fields = {
  ...scheme.lab4Fields,
  patientID:{
    type: String,
    required: "kindly put the patient id"
  }
}

// console.log('lab4FIELDS: ', ch.lab4Fields)
const lab4Schema = new Schema(lab4Fields);

module.exports = mongoose.model('Lab4', lab4Schema);