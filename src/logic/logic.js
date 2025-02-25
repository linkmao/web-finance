
const formatHistorical = (initialDate,expectedValue) => {
  const dateInit = new Date(initialDate[0], initialDate[1])
  const dateFinish = new Date()

  var monthInit = dateInit.getMonth()
  var monthFinish = dateFinish.getMonth()
  var yearInit = dateInit.getFullYear()
  var yearFinish = dateFinish.getFullYear()

  var fechas = [[yearInit, monthInit]]

  // Modulo para los años completos
  while (yearInit < yearFinish) {
    if (monthInit < 11) {
      monthInit++
      fechas.push([yearInit, monthInit])
    } else {
      yearInit++
      monthInit = 0
      fechas.push([yearInit, monthInit])
    }
  }

  // Modulo para el ultimo año
  while (monthInit < monthFinish) {
    monthInit++
    fechas.push([yearInit, monthInit])
  }


// Seccion de conformación del objeto que se devolverá
// Fomato 
// [expectedValue,dateObligation,paid,datePaid,anotation]
const anotation="Valor genérico creado de forma automatica"
const paid = true
const arrayReturn = []
fechas.forEach(i=>{
  const dateObligation= new Date (i[0],i[1])
  const datePaid= new Date (i[0],i[1])
  arrayReturn.push([expectedValue,dateObligation,paid,datePaid,anotation])
})

  return arrayReturn
}


const searchHistorical =(data, obligations)=>{
const dateToSearch = new Date(data.dateObligation[0],data.dateObligation[1])
const date = obligations.historicalValue
res= date.find(x=>{
  if (x[1].getTime()==dateToSearch.getTime()) {
    if(data.value) x[0]=data.value
    if(data.newDateObligation) x[1]=new Date(data.newDateObligation[0],data.newDateObligation[1])
    if(data.paid) x[2]=data.paid
    if(data.datePaid) x[3]=new Date(data.datePaid[0],data.datePaid[1])
    if(data.anotation) x[4] = data.anotation  
  } 
})
return date
}



module.exports = {formatHistorical,searchHistorical}


// const informacion = data.historicalValue
// res = informacion.find(x=>{
//   const fechaOriginal= x[1]
//  if(fechaOriginal=="2024-11-01T05:00:00.000Z")
//  {
//   x[0]= newValue
//   // x[1]= newDate
//   // x[2]= newState
//   // x[3]= newDatePaid
//   x[4]= newAnotation
//  }
//   }
// )