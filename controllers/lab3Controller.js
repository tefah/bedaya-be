// External Dependancies
const boom = require('boom')

// Get Data Models
const Lab3 = require('../models/lab3Schema')

// Get lab3 data
exports.getLab3DataAll = async (req, reply) => {
  try {
    const lab3 = await Lab3.find()
    return lab3
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getLab3Data = async (request, reply) => {
  try {
    const id = request.params.patientID
    const lab3 = await Lab3.find({"patientID": id})
    return lab3
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new lab3 data
exports.addLab3 = async (request, reply) => {
  try {
    const lab3 = new Lab3(request.body)
    return lab3.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing lab3 data
exports.updateLab3 = async (req, reply) => {
  try {
    const id = req.params.patientID
    const lab3 = req.body
    const { ...updateData } = lab3
    const update = await Lab3.findOneAndUpdate({"patientID": id}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a med
exports.deleteLab3 = async (req, reply) => {
  try {
    const id = req.params.patientID
    const lab3 = await Lab3.findOneAndRemove({"patientID": id})
    return lab3
  } catch (err) {
    throw boom.boomify(err)
  }
}

