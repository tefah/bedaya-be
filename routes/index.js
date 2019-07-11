const medController = require('../controllers/medController')
const medSchema = require('../models/medSchema');
const checkupSchema = require('../models/checkupSchema')
const checkupController = require('../controllers/checkupController')

const checkup2Schema = require('../models/checkup2Schema')
const checkup2Controller = require('../controllers/checkup2Controller')
const lab1Schema = require('../models/lab1Schema')
const lab1Controller = require('../controllers/lab1Controller')
const lab2Schema = require('../models/lab2Schema')
const lab2Controller = require('../controllers/lab2Controller')
const lab3Schema = require('../models/lab3Schema')
const lab3Controller = require('../controllers/lab3Controller')
const lab4Schema = require('../models/lab4Schema')
const lab4Controller = require('../controllers/lab4Controller')


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
    // checkup2 data routes
    {
      method: 'GET',
      url: '/api/checkup2all',
      handler: checkup2Controller.getCheckup2DataAll
    },
    {
      method: 'GET',
      url: '/api/checkup2Data/:patientID',
      handler: checkup2Controller.getCheckup2Data
    },
    {
      method: 'POST',
      url: '/api/checkup2',
      handler: checkup2Controller.addCheckup2,
      schema: checkup2Schema,
    },
    {
      method: 'PUT',
      url: '/api/updateCheckup2/:patientID',
      handler: checkup2Controller.updateCheckup2
    },
    {
      method: 'DELETE',
      url: '/api/deleteCheckup2/:patientID',
      handler: checkup2Controller.deleteCheckup2
    },
    // lab1 data routes
    {
      method: 'GET',
      url: '/api/lab1all',
      handler: lab1Controller.getLab1DataAll
    },
    {
      method: 'GET',
      url: '/api/lab1Data/:patientID',
      handler: lab1Controller.getLab1Data
    },
    {
      method: 'POST',
      url: '/api/lab1',
      handler: lab1Controller.addLab1,
      schema: lab1Schema,
    },
    {
      method: 'PUT',
      url: '/api/updateLab1/:patientID',
      handler: lab1Controller.updateLab1
    },
    {
      method: 'DELETE',
      url: '/api/deleteLab1/:patientID',
      handler: lab1Controller.deleteLab1
    },
    // lab2 data routes
    {
      method: 'GET',
      url: '/api/lab2all',
      handler: lab2Controller.getLab2DataAll
    },
    {
      method: 'GET',
      url: '/api/lab2Data/:patientID',
      handler: lab2Controller.getLab2Data
    },
    {
      method: 'POST',
      url: '/api/lab2',
      handler: lab2Controller.addLab2,
      schema: lab2Schema,
    },
    {
      method: 'PUT',
      url: '/api/updateLab2/:patientID',
      handler: lab2Controller.updateLab2
    },
    {
      method: 'DELETE',
      url: '/api/deleteLab2/:patientID',
      handler: lab2Controller.deleteLab2
    },
    // lab3 data routes
    {
      method: 'GET',
      url: '/api/lab3all',
      handler: lab3Controller.getLab3DataAll
    },
    {
      method: 'GET',
      url: '/api/lab3Data/:patientID',
      handler: lab3Controller.getLab3Data
    },
    {
      method: 'POST',
      url: '/api/lab3',
      handler: lab3Controller.addLab3,
      schema: lab3Schema,
    },
    {
      method: 'PUT',
      url: '/api/updateLab3/:patientID',
      handler: lab3Controller.updateLab3
    },
    {
      method: 'DELETE',
      url: '/api/deleteLab3/:patientID',
      handler: lab3Controller.deleteLab3
    },
    // lab4 data routes
    {
      method: 'GET',
      url: '/api/lab4all',
      handler: lab4Controller.getLab4DataAll
    },
    {
      method: 'GET',
      url: '/api/lab4Data/:patientID',
      handler: lab4Controller.getLab4Data
    },
    {
      method: 'POST',
      url: '/api/lab4',
      handler: lab4Controller.addLab4,
      schema: lab4Schema,
    },
    {
      method: 'PUT',
      url: '/api/updateLab4/:patientID',
      handler: lab4Controller.updateLab4
    },
    {
      method: 'DELETE',
      url: '/api/deleteLab4/:patientID',
      handler: lab4Controller.deleteLab4
    },
    
]

module.exports = routes