'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ch = require('./utils/checkupFields');

const checkupFields = {
  ...ch.checkupFields,
  patientID:{
    type: String,
    required: "kindly put the patient id"
  }
}

// console.log('checkupFIELDS: ', ch.checkupFields)
const checkupSchema = new Schema(checkupFields);

module.exports = mongoose.model('Checkup', checkupSchema);