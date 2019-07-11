const {sociodemographicData, 
} = require('./helpers/FirstPage')


const fields = [
  {
    name: "urineExamination",
    type: "select",
    req: true,
    placeholder: "Urine Examination",
    component: "checklist",
  },
  {
      name: "stoolExamination",
      type: "select",
      req: true,
      placeholder: "Stool Examination",
      component: "checklist",
  },
  {
      name: "bloodExamination",
      type: "select",
      req: true,
      placeholder: "Blood Examination",
      component: "checklist",
  },
  {
      name: "clinics",
      type: "select",
      req: true,
      placeholder: "Clinics",
      component: "checklist",
  },
  {
      name: "ecgComment",
      type: "text",
      req: false,
      placeholder: "ECG comment",
      component: "input",
  }
]

const lab1FieldsArr = fields.map(field => {
  return field.req?{
    [field.name]:{
      type: String,
      required: `kindly enter the ${field.placeholder} `
    }
  }: {
    [field.name]:{
      type: String,
    }
  }
})
let lab1Fields = {}
const fill = (array) => {
  array.forEach((elem) => {
    lab1Fields = {
      ...lab1Fields,
      ...elem
    }
  })
}
fill(lab1FieldsArr)

// console.log("CHECKUP FIELDS", checkupFields)
exports.lab1Fields = lab1Fields;