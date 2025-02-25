
const data = {
  _id: "67b3f28ca885e76b7896faa7",
  nameObligation: "Hipoteca Davivienda",
  description: "Credito hipotecario del apartamento",
  userId: "67abc07433672970c9bf454f",
  expectedValue: 550000,
  fixedValue: true,
  limitDay: 5,
  historicalValue: [
  [
  550000,
  "2022-12-01T05:00:00.000Z",
  true,
  "2022-12-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2023-01-01T05:00:00.000Z",
  true,
  "2023-01-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2023-02-01T05:00:00.000Z",
  true,
  "2023-02-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2023-03-01T05:00:00.000Z",
  true,
  "2023-03-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2023-04-01T05:00:00.000Z",
  true,
  "2023-04-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2023-05-01T05:00:00.000Z",
  true,
  "2023-05-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2023-06-01T05:00:00.000Z",
  true,
  "2023-06-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2023-07-01T05:00:00.000Z",
  true,
  "2023-07-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2023-08-01T05:00:00.000Z",
  true,
  "2023-08-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2023-09-01T05:00:00.000Z",
  true,
  "2023-09-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2023-10-01T05:00:00.000Z",
  true,
  "2023-10-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2023-11-01T05:00:00.000Z",
  true,
  "2023-11-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2023-12-01T05:00:00.000Z",
  true,
  "2023-12-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2024-01-01T05:00:00.000Z",
  true,
  "2024-01-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2024-02-01T05:00:00.000Z",
  true,
  "2024-02-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2024-03-01T05:00:00.000Z",
  true,
  "2024-03-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2024-04-01T05:00:00.000Z",
  true,
  "2024-04-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2024-05-01T05:00:00.000Z",
  true,
  "2024-05-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2024-06-01T05:00:00.000Z",
  true,
  "2024-06-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2024-07-01T05:00:00.000Z",
  true,
  "2024-07-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2024-08-01T05:00:00.000Z",
  true,
  "2024-08-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2024-09-01T05:00:00.000Z",
  true,
  "2024-09-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2024-10-01T05:00:00.000Z",
  true,
  "2024-10-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2024-11-01T05:00:00.000Z",
  true,
  "2024-11-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2024-12-01T05:00:00.000Z",
  true,
  "2024-12-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2025-01-01T05:00:00.000Z",
  true,
  "2025-01-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ],
  [
  550000,
  "2025-02-01T05:00:00.000Z",
  true,
  "2025-02-01T05:00:00.000Z",
  "Valor genérico creado de forma automatica"
  ]
  ]
  }




const fecha = new Date(2024,10)
const newValue=777777
const newAnotation="VALOR EDITADOOOOOOOOOOOOOOO"


const informacion = data.historicalValue
res = informacion.find(x=>{
  const fechaOriginal= x[1]
 if(fechaOriginal=="2024-11-01T05:00:00.000Z")
 {
  x[0]= newValue
  // x[1]= newDate
  // x[2]= newState
  // x[3]= newDatePaid
  x[4]= newAnotation
 }
  }
)
console.log(informacion)




// const searchHistorical =(dateObligation)=>{
//   }
  

