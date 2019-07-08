const {sociodemographicData, 
} = require('./helpers/FirstPage')

const fields =  [
  {
    name: "houseNumber",
    type: "number",
    req: false,
    placeholder:"House Number",
  },
  {
    name: "patientName",
    type: "text",
    req: true,
    placeholder:"Patient's Name",
  },
  {
    name: "gender",
    type: "select",
    req: true,
    placeholder:"Gender",
  },
  {
    name: "age",
    type: "text",
    req: true,
    placeholder:"Patient's Age",
  },
  {
    name: "occupation",
    type: "text",
    req: false,
    placeholder:"Occupation",
  },
  {
    name: "maritalStatus",
    type: "select",
    req: true,
    placeholder:"Marital Status",
  },
  {
    name: "childrenNumber",
    type: "number",
    req: false,
    placeholder:"Children Number",
  },
  {
    name: "ageOYC",
    type: "text",
    req: false,
    placeholder:"Age of the youngest child",
  },
  {
    name: "educationalLevel",
    type: "checklist",
    req: false,
    placeholder:"Educational Level",
  },
  {
    name: "consangunity",
    type: "checkbox",
    req: true,
    placeholder:"onsangunity",
  },
  {
    name: "socioeconomicStatus",
    type: "select",
    req: false,
    placeholder:"Socioeconomic Status",
  },
  {
    name: "habitsOfMedicalImportance",
    type: "checklist",
    req: false,
    placeholder:"Habits of medical importance",
  },
  {
    name: "rateOfSmoking",
    type: "text",
    req: false,
    placeholder:"Rate of smoking per day",
  },
  {
    name: "durationOfSmokingCessation",
    type: "text",
    req: false,
    placeholder:"Duration of smoking cessation",
  },
  {
    name: "telNumber",
    type: "number",
    req: false,
    placeholder:"Tel. number",
  },
  {
    name: "mobNumber",
    type: "number",
    req: false,
    placeholder:"Mobile number",
  },
  {
    name: "otherVillageName",
    type: "text",
    req: false,
    placeholder:"Other village name",

  },
  {
    name: "complaint",
    type: "text",
    req: false,
    placeholder:"Complaint",
  },
  {
    name: "historyOfPresentIllness",
    type: "text",
    req: false,
    placeholder:"History of present illness",
  },

  {
    name: "medical",
    type: "select",
    req: false,
    placeholder:"Medical",
  },
  {
    name: "drugsForChoronic",
    type: "text",
    req: false,
    placeholder:"Drugs for chronic diseases",
  },
  {
    name: "otherDrugs",
    type: "text",
    req: false,
    placeholder:"Other drugs",
  },
  {
    name: "surgical",
    type: "select",
    req: false,
    placeholder:"Surgical",
  },
  {
    name: "operation",
    type: "text",
    req: false,
    placeholder:"Operation",
  },
  {
    name: "bloodTransfusion",
    type: "checkbox",
    req: false,
    placeholder:"Blood transfusion",
  },
  {
    name: "durationOfBT",
    type: "text",
    req: false,
    placeholder:"Duration of blood transfusion",
  },
  {
    name: "allergy",
    type: "checkbox",
    req: false,
    placeholder:"Allergy",
  },
  {
    name: "defineAllergy",
    type: "text",
    req: false,
    placeholder:"Define Allergy",
  },
  {
    name: "familyHistory",
    type: "select",
    req: false,
    placeholder:"Family History",
  },
  {
    name: "systolicBloodPressure",
    type: "text",
    req: false,
    placeholder:"systolic Blood Pressure (mmHg)",
  },
  {
    name: "DiastolicBloodPressure",
    type: "text",
    req: false,
    placeholder:"Diastolic Blood Pressure (mmHg)",
  },
  {
    name: "heartRate",
    type: "text",
    req: false,
    placeholder:"Heart rate (bpm)",
  },
  {
    name: "Temperature",
    type: "number",
    req: false,
    placeholder:"Temperature",
  },
  {
    name: "weight",
    type: "text",
    req: false,
    placeholder:"Weight(Kg)",
  },
  {
    name: "height",
    type: "text",
    req: false,
    placeholder:"Height (cm)",
  },
  {
    name: "bmi",
    type: "number",
    req: false,
    placeholder:"BMI",
  },
  {
    name: "complexion",
    type: "select",
    req: false,
    placeholder:"complexion",
  },
  {
    name: "cyanosis",
    type: "select",
    req: false,
    placeholder:"Cyanosis",
  },
  {
    name: "randomBloodSugar",
    type: "text",
    req: false,
    placeholder:"Random blood sugar",
  },
  {
    name: "waistCircumference",
    type: "number",
    req: false,
    placeholder:"Waist circumference",
  },
  {
    name: "hipCircumference",
    type: "number",
    req: false,
    placeholder:"Hip circumference",
  },
  {
    name: "referralOfConvoyClincs",
    type: "select",
    req: false,
    placeholder:"Referral of convoy clincs",
  },
  {
    name: "random",
    type: "checkbox",
    req: false,
    placeholder:"Random",
  },
  {
    name: "survays",
    type: "select",
    req: false,
    placeholder:"Referral of convoy clincs",
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