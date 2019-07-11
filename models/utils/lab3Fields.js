
const urineAnalysisResultFields = [
  {component: "label", placeholder: "Urine analysis result"},
  {
      name: "urineAnalysis",
      type: "checkbox",
      req: true,
      placeholder: "Urine analysis",
      component: "checkbox",
  }
]
const chemicalExaminationFields = [
  {component: "label", placeholder: "Chemical Examination"},
  {
      name: "glucose",
      type: "select",
      req: true,
      placeholder: "Glucose",
      component: "radio",
  },
  {
      name: "glucoseCount",
      type: "text",
      req: false,
      placeholder: "Glucose count",
      component: "input",
  },
  {
      name: "protein",
      type: "select",
      req: true,
      placeholder: "protein",
      component: "radio",
  },
  {
      name: "proteinCount",
      type: "text",
      req: false,
      placeholder: "protein count",
      component: "input",
  },
  {
      name: "phValue",
      type: "number",
      req: false,
      placeholder: "PH Value",
      component: "input",
  },
  {
      name: "phStatus",
      type: "select",
      req: true,
      placeholder: "PH status",
      component: "radio",
  }
]
const microscopicExaminationFields = [
  {component: "label", placeholder: "Microscopic Examination"},
  {
      name: "rbcs",
      type: "select",
      req: true,
      placeholder: "RBCS",
      component: "radio",
  },
  {
      name: "rbcs/hpf",
      type: "text",
      req: false,
      placeholder: "RBCS/HPF",
      component: "input",
  },
  {
      name: "pusCells",
      type: "select",
      req: true,
      placeholder: "Pus cells",
      component: "radio",
  },
  {
      name: "pusCells/hpf",
      type: "text",
      req: false,
      placeholder: "Pus cells/HPF",
      component: "input",
  },
  {
      name: "epithelialCells",
      type: "select",
      req: true,
      placeholder: "Epithelial cells",
      component: "radio",
  },
  {
      name: "epithelialCells/hpf",
      type: "text",
      req: false,
      placeholder: "Epithelial cells/HPF",
      component: "input",
  },
  {
      name: "casts",
      type: "select",
      req: true,
      placeholder: "Casts",
      component: "radio",
  }, 
  {
      name: "casts/hpf",
      type: "text",
      req: false,
      placeholder: "Casts/HPF",
      component: "input",
  },
  {
      name: "uricAcidCrystals",
      type: "select",
      req: true,
      placeholder: "Uric acid crystals",
      component: "radio",
  }, 
  {
      name: "calciumOxalateCrystals",
      type: "select",
      req: true,
      placeholder: "Calcium oxalate crystals",
      component: "radio",
  }, 
  {
      name: "triplePhosphateCrystals",
      type: "select",
      req: true,
      placeholder: "Triple phosphate crystals",
      component: "radio",
  }, 
  {
      name: "amorphus",
      type: "select",
      req: true,
      placeholder: "Amorphus",
      component: "radio",
  }, 
  {
      name: "eggs",
      type: "select",
      req: true,
      placeholder: "Eggs",
      component: "radio",
  }, 
  {
      name: "eggsCountType",
      type: "text",
      req: false,
      placeholder: "Eggs count&type",
      component: "input",
  },
  {
      name: "mucous",
      type: "select",
      req: true,
      placeholder: "Mucous",
      component: "radio",
  }, 
  {
      name: "bacteria",
      type: "select",
      req: true,
      placeholder: "Bacteria",
      component: "radio",
  }, 
  {
      name: "yeast",
      type: "select",
      req: true,
      placeholder: "Yeast",
      component: "radio",
  }
]
const additionalTestsFields = [
  {component: "label", placeholder: "Additional tests"},
  {
      name: "microalbuminuria",
      type: "text",
      req: false,
      placeholder: "Microalbuminuria",
      component: "input",
  },
  {
      name: "pregnancyTest",
      type: "select",
      req: true,
      placeholder: "Pregnancy test",
      component: "radio",
  },
  {
      name: "additionalComment",
      type: "text",
      req: false,
      placeholder: "Additional comment",
      component: "input",
  }
]


const fields = [
  ...urineAnalysisResultFields,
  ...chemicalExaminationFields,
  ...microscopicExaminationFields,
  ...additionalTestsFields,
]


const lab3FieldsArr = fields.map(field => {
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
let lab3Fields = {}
const fill = (array) => {
  array.forEach((elem) => {
    lab1Fields = {
      ...lab3Fields,
      ...elem
    }
  })
}
fill(lab3FieldsArr)

// console.log("CHECKUP FIELDS", checkupFields)
exports.lab3Fields = lab3Fields;