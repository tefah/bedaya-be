// External Dependancies
const boom = require('boom')

// Get Data Models
const Lab2 = require('../models/lab2Schema')

// Get lab2 data
exports.getLab2DataAll = async (req, reply) => {
  try {
    const lab2 = await Lab2.find()
    return lab2
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getLab2Data = async (request, reply) => {
  try {
    const id = request.params.patientID
    const lab2 = await Lab2.find({"patientID": id})
    return lab2
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new lab2 data
exports.addLab2 = async (request, reply) => {
  try {
    const lab2 = new Lab2(request.body)
    return lab2.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing lab2 data
exports.updateLab2 = async (req, reply) => {
  try {
    const id = req.params.patientID
    const lab2 = req.body
    const { ...updateData } = lab2
    const update = await Lab2.findOneAndUpdate({"patientID": id}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a med
exports.deleteLab2 = async (req, reply) => {
  try {
    const id = req.params.patientID
    const lab2 = await Lab2.findOneAndRemove({"patientID": id})
    return lab2
  } catch (err) {
    throw boom.boomify(err)
  }
}

