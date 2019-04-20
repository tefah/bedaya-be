// External Dependancies
const boom = require('boom')

// Get Data Models
const Med = require('../models/medSchema')

// Get all meds
exports.getMeds = async (req, reply) => {
  try {
    const meds = await Med.find()
    return meds
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single med by ID
exports.getSingleMed = async (request, reply) => {
  try {
    const id = request.params.id
    const med = await Med.findById(id)
    return med
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new med
exports.addMed = async (request, reply) => {
  try {
    // console.log("BODY", request.body)
    //   console.log("query",request.query)
    //   console.log("params",request.params)
    //   console.log("headers", request.headers)
    //   console.log("RAW", request.raw)
    //   console.log("ID", request.id)
    //   console.log("IP", request.ip)
    //   console.log("IPS", request.ips)
    //   console.log("HOST NAME",request.hostname)
    //   request.log.info('some info')
    const med = new Med(request.body)
    return med.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing med
exports.updateMed = async (req, reply) => {
  try {
    const id = req.params.id
    const med = req.body
    const { ...updateData } = med
    const update = await Med.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a med
exports.deleteMed = async (req, reply) => {
  try {
    const id = req.params.id
    const med = await Med.findByIdAndRemove(id)
    return med
  } catch (err) {
    throw boom.boomify(err)
  }
}

