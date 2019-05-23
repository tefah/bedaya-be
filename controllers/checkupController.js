// External Dependancies
const boom = require('boom')

// Get Data Models
const Checkup = require('../models/checkupSchema')

// Get checkup data
exports.getCheckupDataAll = async (req, reply) => {
  try {
    const checkup = await Checkup.find()
    return checkup
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getCheckupData = async (request, reply) => {
  try {
    const id = request.params.patientID
    const checkup = await Checkup.find({"patientID": id})
    return checkup
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new checkup data
exports.addCheckup = async (request, reply) => {
  try {
    const checkup = new Checkup(request.body)
    return checkup.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing checkup data
exports.updateCheckup = async (req, reply) => {
  try {
    const id = req.params.patientID
    const checkup = req.body
    const { ...updateData } = checkup
    const update = await Checkup.findOneAndUpdate({"patientID": id}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a med
exports.deleteCheckup = async (req, reply) => {
  try {
    const id = req.params.patientID
    const checkup = await Checkup.findOneAndRemove({"patientID": id})
    return checkup
  } catch (err) {
    throw boom.boomify(err)
  }
}

