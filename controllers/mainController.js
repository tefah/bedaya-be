// External Dependancies
const boom = require('boom')

// Get Data Models
const Checkup = require('../models/checkupSchema')
const Checkup2 = require('../models/checkup2Schema')
const Lab1 = require('../models/lab1Schema')
const Lab2 = require('../models/lab2Schema')
const Lab3 = require('../models/lab3Schema')
const Lab4 = require('../models/lab4Schema')
const Pharmacy = require('../models/pharmacySchema')
const Followup = require('../models/followupSchema')
let converter = require('json-2-csv');


magic = (arr, patientID) => {
  let res = {}
  arr.forEach(entry => {
    if(entry.patientID === patientID){
      // console.log('========>', entry)
      res = {...entry}
    }
  });
  res = res['_doc']
  return res;
}

exports.getAllData = async (req, reply) => {
  try {
    const checkup = await Checkup.find()
    const checkup2 = await Checkup2.find()
    const lab1 = await Lab1.find()
    const lab2 = await Lab2.find()
    const lab3 = await Lab3.find()
    const lab4 = await Lab4.find()
    const pharmacy = await Pharmacy.find()
    const followup = await Followup.find()
    const allData = checkup.map(entry => {
      const ch = entry['_doc']
      const ch2 = magic(checkup2, entry.patientID)
      const l1 = magic(lab1,  entry.patientID)
      const l2 = magic(lab2,  entry.patientID)
      const l3 = magic(lab3,  entry.patientID)
      const l4 = magic(lab4,  entry.patientID)
      const phar = magic(pharmacy,  entry.patientID)
      const follow = magic(followup,  entry.patientID)
      patientData = {
        ...ch,
        ...ch2,
        ...l1,
        ...l2,
        ...l3,
        ...l4,
        ...phar,
        ...follow,
      }
      // patientData = patientData['_doc']
      // console.log('==============> ', patientData)
      // console.log('==============>CHECKUP2 ', ch)
      return patientData
    })
    let csvback = {}
    // console.log('<<<<<<>>>>>>>>>>>>>>>>>>>: ', allData)
    converter.json2csv(allData, (err, csv)=>{
      if(err)
        return err;
      csvback = csv
      console.log(csv)
    })
    return csvback
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.deletePatient = async (req, reply) => {
  try {
    const id = req.params.patientID
    const checkup = await Checkup.findOneAndRemove({"patientID": id})
    const checkup2 = await Checkup2.findOneAndRemove({"patientID": id})
    const lab1 = await Lab1.findOneAndRemove({"patientID": id})
    const lab2 = await Lab2.findOneAndRemove({"patientID": id})
    const lab3 = await Lab3.findOneAndRemove({"patientID": id})
    const lab4 = await Lab4.findOneAndRemove({"patientID": id})
    const pharmacy = await Pharmacy.findOneAndRemove({"patientID": id})
    const followup = await Followup.findOneAndRemove({"patientID": id})
    reply.header('Content-Type', 'text/csv; charset=utf-8')
      .send(csvback)
  } catch (err) {
    throw boom.boomify(err)
  }
}

