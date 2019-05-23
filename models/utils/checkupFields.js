const {sociodemographicData, 
} = require('./helpers/FirstPage')

const fields =  [
  {
    name: "houseNumber",
    type: "number",
    req: false,
    placeholder:"House Number",
    component: "input",
    key: 1,
  },
  {
    name: "patientName",
    type: "text",
    req: true,
    placeholder:"Patient's Name",
    component: "input",
    key: 2,
  },
  {
    name: "gender",
    type: "select",
    req: true,
    placeholder:"Gender",
    component: "radio",
    options: sociodemographicData.gender,
    key: 3,
  },
  {
    name: "age",
    type: "text",
    req: true,
    placeholder:"Patient's Age",
    component: "input",
    key: 4,
  },
  {
    name: "occupation",
    type: "text",
    req: false,
    placeholder:"Occupation",
    component: "input",
    key: 5,
  },
  {
    name: "maritalStatus",
    type: "select",
    req: true,
    placeholder:"Marital Status",
    component: "radio",
    options: sociodemographicData.maritalStatus,
    key: 6,
  },
  {
    name: "childrenNumber",
    type: "number",
    req: false,
    placeholder:"Children Number",
    component: "input",
    key: 7,
  },
  {
    name: "ageOYC",
    type: "text",
    req: true,
    placeholder:"Age of the youngest child",
    component: "input",
    key: 8,
  },
  {
    name: "educationalLevel",
    type: "checklist",
    req: false,
    placeholder:"Educational Level",
    component: "checklist",
    options: sociodemographicData.educationalLevel,
    key: 9,
  },
  {
    name: "consangunity",
    type: "checkbox",
    req: true,
    placeholder:"onsangunity",
    component: "checkbox",
    key: 10,
  },
  {
    name: "socioeconomicStatus",
    type: "select",
    req: true,
    placeholder:"Socioeconomic Status",
    component: "radio",
    options: sociodemographicData.socioecnomicStatus,
    key: 11,
  },
  {
    name: "habitsOfMedicalImportance",
    type: "checklist",
    req: false,
    placeholder:"Habits of medical importance",
    component: "checklist",
    options: sociodemographicData.habitsofmedicalImporatance,
    key: 12,
  },
  {
    name: "rateOfSmoking",
    type: "text",
    req: false,
    placeholder:"Rate of smoking per day",
    component: "input",
    key: 13,
  },
  {
    name: "durationOfSmokingCessation",
    type: "text",
    req: false,
    placeholder:"Duration of smoking cessation",
    component: "input",
    key: 14,
  },
  {
    name: "telNumber",
    type: "number",
    req: false,
    placeholder:"Tel. number",
    component: "input",
    key: 15,
  },
  {
    name: "mobNumber",
    type: "number",
    req: false,
    placeholder:"Mobile number",
    component: "input",
    key: 16,
  },
  {
    name: "otherVillageName",
    type: "text",
    req: false,
    placeholder:"Other village name",
    component: "input",
    key: 17,
  },

];

const checkupFieldsArr = fields.map(field => {
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
let checkupFields = {}
const fill = (array) => {
  array.forEach((elem) => {
    checkupFields = {
      ...checkupFields,
      ...elem
    }
  })
}
fill(checkupFieldsArr)

// console.log("CHECKUP FIELDS", checkupFields)
exports.checkupFields = checkupFields;