const medController = require('../controllers/medController')
const medSchema = require('../models/medSchema');

const routes = [
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
    schema: {
      querystring: {
        name: { type: 'string' },
        barcode: { type: 'string' }
      }
    },
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
  }
]

module.exports = routes