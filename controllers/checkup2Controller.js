// External Dependancies
const boom = require('boom')

// Get Data Models
const Checkup2 = require('../models/checkup2Schema')

// Get checkup2 data
exports.getCheckup2DataAll = async (req, reply) => {
  try {
    const checkup2 = await Checkup2.find()
    return checkup2
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getCheckup2Data = async (request, reply) => {
  try {
    const id = request.params.patientID
    const checkup2 = await Checkup2.find({"patientID": id})
    return checkup2
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new checkup2 data
exports.addCheckup2 = async (request, reply) => {
  try {
    const checkup2 = new Checkup2(request.body)
    return checkup2.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing checkup2 data
exports.updateCheckup2 = async (req, reply) => {
  try {
    const id = req.params.patientID
    const checkup2 = req.body
    const { ...updateData } = checkup2
    const update = await Checkup2.findOneAndUpdate({"patientID": id}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a med
exports.deleteCheckup2 = async (req, reply) => {
  try {
    const id = req.params.patientID
    const checkup2 = await Checkup2.findOneAndRemove({"patientID": id})
    return checkup2
  } catch (err) {
    throw boom.boomify(err)
  }
}

