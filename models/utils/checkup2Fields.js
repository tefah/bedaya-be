const {sociodemographicData, 
} = require('./helpers/FirstPage')

const fields = [
  {
    name: "menarche",
    type: "text",
    req: false,
    placeholder: "Menarche",
    component: "input",
  },
  {
      name: "rhythm",
      type: "text",
      req: false,
      placeholder: "Rhythm",
      component: "input",
  },
  {
      name: "duration",
      type: "text",
      req: false,
      placeholder: "Duration",
      component: "input",
  },
  {
      name: "cycle",
      type: "text",
      req: false,
      placeholder: "Cycle",
      component: "input",
  },
  {
      name: "amount",
      type: "text",
      req: false,
      placeholder: "Amount",
      component: "input",
  },
  {
      name: "associatedSymptoms",
      type: "text",
      req: false,
      placeholder: "Associated symptoms",
      component: "input",
  },
  {
      name: "lmp",
      type: "text",
      req: false,
      placeholder: "LMP",
      component: "input",
  },
  {
    name: "edd",
    type: "text",
    req: false,
    placeholder: "EDD",
    component: "input",
  },
  {
    name: "ega",
    type: "text",
    req: false,
    placeholder: "EGA",
    component: "input",
  },
  {
    name: "method",
    type: "text",
    req: false,
    placeholder: "Method",
    component: "input",
  },
  {
    name: "start",
    type: "text",
    req: false,
    placeholder: "Start",
    component: "input",
  },
  {
    name: "duration",
    type: "text",
    req: false,
    placeholder: "Duration",
    component: "input",
  },
  {
    name: "causeOfStoppage",
    type: "text",
    req: false,
    placeholder: "Cause of stoppage",
    component: "input",
  },
  {
    name: "code",
    type: "text",
    req: false,
    placeholder: "Code",
    component: "input",
  },
  {
    name: "numOfPregnancies",
    type: "text",
    req: false,
    placeholder: "Num. of pregnancies",
    component: "input",
  },
  {
    name: "numOfDeliveries",
    type: "text",
    req: false,
    placeholder: "Num. of deliveries",
    component: "input",
  },
  {
    name: "numOfMiscarriageAbortion",
    type: "text",
    req: false,
    placeholder: "Num. of miscarriage/abortion",
    component: "input",
  },
  {
    name: "dateOfPregnancy",
    type: "text",
    req: false,
    placeholder: "Date of pregnancy",
    component: "input",
  },
  {
    name: "pot",
    type: "text",
    req: false,
    placeholder: "POT",
    component: "input",
  },
  {
    name: "delivery",
    type: "text",
    req: false,
    placeholder: "Delivery",
    component: "input",
  },
  {
    name: "postpartumComplications",
    type: "text",
    req: false,
    placeholder: "PostPartum complications",
    component: "input",
  },
  {
    name: "outcome",
    type: "text",
    req: false,
    placeholder: "Outcome",
    component: "input",
  },
  {
    name: "anp",
    type: "text",
    req: false,
    placeholder: "ANP",
    component: "input",
  },
  {
    name: "type",
    type: "select",
    req: true,
    placeholder: "Type",
    component: "radio",
  },
  {
    name: "modeOfTermination",
    type: "text",
    req: false,
    placeholder: "Mode of termination",
    component: "input",
  },
  {
    name: "postabortionComplicants",
    type: "text",
    req: false,
    placeholder: "Post-abortion complicants",
    component: "input",
  },
  {
    name: "cause",
    type: "text",
    req: false,
    placeholder: "Cause",
    component: "input",
  },
]

const checkup2FieldsArr = fields.map(field => {
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
let checkup2Fields = {}
const fill = (array) => {
  array.forEach((elem) => {
    checkup2Fields = {
      ...checkup2Fields,
      ...elem
    }
  })
}
fill(checkup2FieldsArr)

// console.log("CHECKUP FIELDS", checkupFields)
exports.checkup2Fields = checkup2Fields;