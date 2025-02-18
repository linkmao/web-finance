
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

module.exports = formatHistorical
