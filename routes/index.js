const medController = require('../controllers/medController')
const medSchema = require('../models/medSchema');
const checkupSchema = require('../models/checkupSchema')
const checkupController = require('../controllers/checkupController')


const routes = [
  //medications routes
  {
    method: 'GET',
    url: '/api/medslist',
    handler: medController.getMeds
  },
  {
    method: 'GET',
    url: '/api/meds/:id',
    handler: medController.getSingleMed
  },
  {
    method: 'POST',
    url: '/api/addMed',
    handler: medController.addMed,
    schema: medSchema,
  },
  {
    method: 'PUT',
    url: '/api/updateMed/:id',
    handler: medController.updateMed
  },
  {
    method: 'DELETE',
    url: '/api/deleteMed/:id',
    handler: medController.deleteMed
  },
  // checkup data routes
  {
    method: 'GET',
    url: '/api/checkup',
    handler: checkupController.getCheckupDataAll
  },
  {
    method: 'GET',
    url: '/api/checkupData/:patientID',
    handler: checkupController.getCheckupData
  },
  {
    method: 'POST',
    url: '/api/addCheckup',
    handler: checkupController.addCheckup,
    schema: checkupSchema,
  },
  {
    method: 'PUT',
    url: '/api/updateCheckup/:patientID',
    handler: checkupController.updateCheckup
  },
  {
    method: 'DELETE',
    url: '/api/deleteCheckup/:patientID',
    handler: checkupController.deleteCheckup
  },
]

module.exports = routes