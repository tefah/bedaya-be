const {sociodemographicData, 
} = require('./helpers/FirstPage')


const stoolAnalysisResultsFields = [
  {
      name: "stoolAnalysis",
      type:"checkbox",
      req: true,
      placeholder: "Stool analysis",
      component: "checkbox",
  }
]
const physicalDataFields = [
  {
      name: "blood",
      type: "select",
      req: true,
      placeholder: "Blood",
      component: "radio",
  },
  {
      name: "mucus",
      type: "select",
      req: true,
      placeholder: "Mucus",
      component: "radio",
  },
  {
      name: "color",
      type: "select",
      req: true,
      placeholder: "Color",
      component: "checklist",
  },
  {
      name: "worm",
      type: "select",
      req: true,
      placeholder: "Worm",
  }
]
const microscopicDataFields = [
  {
      name: "parasiticInfection",
      type: "select",
      req: true,
      placeholder: "Parasitic infection",
      component: "radio",
  }
]
const parasitesHelminthesProtozoaFields = [
  {
      name: "fasciola",
      type: "select",
      req: true,
      placeholder: "Fasciola",
      component: "radio",
  },
  {
      name: "schMansoni",
      type: "select",
      req: true,
      placeholder: "Sch.mansoni",
      component: "radio",
  },
  {
      name: "hNana",
      type: "select",
      req: true,
      placeholder: "H.nana",
      component: "radio",
  },
  {
      name: "tinea",
      type: "select",
      req: true,
      placeholder: "Tinea",
      component: "radio",
  },
  {
      name: "ascaris",
      type: "select",
      req: true,
      placeholder: "Ascaris",   
  },
  {
      name: "tTrichuria",
      type: "select",
      req: true,
      placeholder: "T.trichuria",
      component: "radio",
  },
  {
      name: "hookWorm",
      type: "select",
      req: true,
      placeholder: "Hook Worm",
  },
  {
      name: "enterobius",
      type: "select",
      req: true,
      placeholder: "Enterobius",
      component: "radio",
  },
  {
      name: "eColi",
      type: "select",
      req: true,
      placeholder: "E.coli",
      component: "radio",
  },
  {
      name: "eHistolytica",
      type: "select",
      req: true,
      placeholder: "E.histolytica",
  },
  {
      name: "giardia",
      type: "select",
      req: true,
      placeholder: "Giardia",

  },
  {
      name: "strongyloiesLarva",
      type: "select",
      req: true,
      placeholder: "Strongyloies Larva",
  },
  {
      name: "giardiaTrophozoite",
      type: "select",
      req: true,
      placeholder: "Giardia trophozoite",

  },
  {
      name: "giardiaTrophozoiteCount",
      type: "text",
      req: false,
      placeholder: "Giardia trophozoite count",
      component: "input",
  },
  {
      name: "eHistolyticaTrophozoite",
      type: "select",
      req: true,
      placeholder: "E.histolytica trophozoite",
      component: "radio",
  },
  {
      name: "eHistolyticaTrophozoiteCount",
      type: "text",
      req: false,
      placeholder: "E.histolytica trophozoite count",
      component: "input",
  },
  {
      name: "wbcs",
      type: "select",
      req: true,
      placeholder: "WBCS",
      component: "radio",
  },
  {
      name: "wbcsCount",
      type: "text",
      req: false,
      placeholder: "WBCS count",
      component: "input",
  },
  {
      name: "rbcs",
      type: "select",
      req: true,
      placeholder: "RBCs",
 

  },
  {
      name: "rbcsCount",
      type: "text",
      req: false,
      placeholder: "RBCs count",
      component: "input",
  }
]
const additionalTestsFields = [
  {
      name: "hPylori",
      type: "select",
      req: true,
      placeholder: "H.Pylori",
      component: "radio",

  },
  {
      name: "fobt",
      type: "select",
      req: true,
      placeholder: "FOBT",
      component: "radio",

  }
]


const fields = [
  ...stoolAnalysisResultsFields,
  ...physicalDataFields,
  ...microscopicDataFields,
  ...parasitesHelminthesProtozoaFields,
  ...additionalTestsFields,
]

const lab4FieldsArr = fields.map(field => {
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
let lab4Fields = {}
const fill = (array) => {
  array.forEach((elem) => {
    lab4Fields = {
      ...lab4Fields,
      ...elem
    }
  })
}
fill(lab4FieldsArr)

// console.log("CHECKUP FIELDS", checkupFields)
exports.lab4Fields = lab4Fields;