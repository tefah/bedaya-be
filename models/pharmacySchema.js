'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheme = require('./utils/pharmacyFields');

const pharmacyFields = {
  ...scheme.pharmacyFields,
  patientID:{
    type: String,
    required: "kindly put the patient id"
  }
}

// console.log('lab1FIELDS: ', ch.lab1Fields)
const pharmacySchema = new Schema(pharmacyFields, {strict: false});

module.exports = mongoose.model('Pharmacy', pharmacySchema);