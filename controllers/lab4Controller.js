// External Dependancies
const boom = require('boom')

// Get Data Models
const Lab4 = require('../models/lab4Schema')

// Get lab4 data
exports.getLab4DataAll = async (req, reply) => {
  try {
    const lab4 = await Lab4.find()
    return lab4
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getLab4Data = async (request, reply) => {
  try {
    const id = request.params.patientID
    const lab4 = await Lab4.find({"patientID": id})
    return lab4
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new lab4 data
exports.addLab4 = async (request, reply) => {
  try {
    const lab4 = new Lab4(request.body)
    return lab4.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing lab4 data
exports.updateLab4 = async (req, reply) => {
  try {
    const id = req.params.patientID
    const lab4 = req.body
    const { ...updateData } = lab4
    const update = await Lab4.findOneAndUpdate({"patientID": id}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a med
exports.deleteLab4 = async (req, reply) => {
  try {
    const id = req.params.patientID
    const lab4 = await Lab4.findOneAndRemove({"patientID": id})
    return lab4
  } catch (err) {
    throw boom.boomify(err)
  }
}

