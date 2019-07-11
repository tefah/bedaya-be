'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheme = require('./utils/lab3Fields');

const lab3Fields = {
  ...scheme.lab3Fields,
  patientID:{
    type: String,
    required: "kindly put the patient id"
  }
}

// console.log('lab3FIELDS: ', ch.lab3Fields)
const lab3Schema = new Schema(lab3Fields);

module.exports = mongoose.model('Lab3', lab3Schema);