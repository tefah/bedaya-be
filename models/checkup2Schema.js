'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ch = require('./utils/checkup2Fields');

const checkup2Fields = {
  ...ch.checkup2Fields,
  patientID:{
    type: String,
    required: "kindly put the patient id"
  }
}

// console.log('checkupFIELDS: ', ch.checkupFields)
const checkup2Schema = new Schema(checkup2Fields);

module.exports = mongoose.model('Checkup2', checkup2Schema);