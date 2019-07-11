// External Dependancies
const boom = require('boom')

// Get Data Models
const Lab1 = require('../models/lab1Schema')

// Get lab1 data
exports.getLab1DataAll = async (req, reply) => {
  try {
    const lab1 = await Lab1.find()
    return lab1
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getLab1Data = async (request, reply) => {
  try {
    const id = request.params.patientID
    const lab1 = await Lab1.find({"patientID": id})
    return lab1
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new lab1 data
exports.addLab1 = async (request, reply) => {
  try {
    const lab1 = new Lab1(request.body)
    return lab1.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing lab1 data
exports.updateLab1 = async (req, reply) => {
  try {
    const id = req.params.patientID
    const lab1 = req.body
    const { ...updateData } = lab1
    const update = await Lab1.findOneAndUpdate({"patientID": id}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a med
exports.deleteLab1 = async (req, reply) => {
  try {
    const id = req.params.patientID
    const lab1 = await Lab1.findOneAndRemove({"patientID": id})
    return lab1
  } catch (err) {
    throw boom.boomify(err)
  }
}

