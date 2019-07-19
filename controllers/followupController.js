// External Dependancies
const boom = require('boom')

// Get Data Models
const Followup = require('../models/followupSchema')

// Get followup data
exports.getFollowupDataAll = async (req, reply) => {
  try {
    const followup = await Followup.find()
    return followup
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.getFollowupData = async (request, reply) => {
  try {
    const id = request.params.patientID
    const followup = await Followup.find({"patientID": id})
    return followup
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new followup data
exports.addFollowup = async (request, reply) => {
  try {
    const followup = new Followup(request.body)
    return followup.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing followup data
exports.updateFollowup = async (req, reply) => {
  try {
    const id = req.params.patientID
    const followup = req.body
    const { ...updateData } = followup
    const update = await Followup.findOneAndUpdate({"patientID": id}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a med
exports.deleteFollowup = async (req, reply) => {
  try {
    const id = req.params.patientID
    const followup = await Followup.findOneAndRemove({"patientID": id})
    return followup
  } catch (err) {
    throw boom.boomify(err)
  }
}

