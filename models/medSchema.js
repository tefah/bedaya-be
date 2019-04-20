
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const medSchema = new Schema({
  medName: {
    type: String,
    required: 'Kindly enter the name of the medicine'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  medBarcode: {
    type: String,
    required: "Kindly enter the barcode of the medicine"
  }
});

module.exports = mongoose.model('Meds', medSchema);