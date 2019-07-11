'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheme = require('./utils/lab2Fields');

const lab2Fields = {
  ...scheme.lab2Fields,
  patientID:{
    type: String,
    required: "kindly put the patient id"
  }
}

// console.log('lab2FIELDS: ', ch.lab2Fields)
const lab2Schema = new Schema(lab2Fields);

module.exports = mongoose.model('Lab2', lab2Schema);