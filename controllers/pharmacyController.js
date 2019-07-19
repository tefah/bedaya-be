// External Dependancies
const boom = require('boom')

// Get Data Models
const Pharmacy = require('../models/pharmacySchema')

// Get pharmacy data
exports.getPharmacyDataAll = async (req, reply) => {
  try {
    const pharmacy = await Pharmacy.find()
    return pharmacy
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getPharmacyData = async (request, reply) => {
  try {
    const id = request.params.patientID
    const pharmacy = await Pharmacy.find({"patientID": id})
    return pharmacy
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new pharmacy data
exports.addPharmacy = async (request, reply) => {
  try {
    const pharmacy = new Pharmacy(request.body)
    return pharmacy.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing pharmacy data
exports.updatePharmacy = async (req, reply) => {
  try {
    const id = req.params.patientID
    const pharmacy = req.body
    const { ...updateData } = pharmacy
    const update = await Pharmacy.findOneAndUpdate({"patientID": id}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a med
exports.deletePharmacy = async (req, reply) => {
  try {
    const id = req.params.patientID
    const pharmacy = await Pharmacy.findOneAndRemove({"patientID": id})
    return pharmacy
  } catch (err) {
    throw boom.boomify(err)
  }
}

