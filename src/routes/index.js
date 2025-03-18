const { Router } = require('express')
const { verifyAuth } = require('../midleware/users')

const Obligations = require('../models/Obligation')
const Users = require('../models/User')

router = Router()

router.get('/', (req, res) => { res.render('index') })

router.get('/newuser', (req, res) => { res.render('users/nuevousuario') })

router.get('/mainview', verifyAuth, async (req, res) => {
  const { name, lastName, userName, email } = req.user
  const id = req.user._id
  const obligations = await Obligations.find({ userId: id }).lean()
  var mes
  var anio
  if (obligations.length != 0) {
    mes = (obligations[0].historicalValue[obligations[0].historicalValue.length - 1][1].toLocaleString('default', { month: 'long' }))
    anio = (obligations[0].historicalValue[obligations[0].historicalValue.length - 1][1].getFullYear())
  } else {
    mes = "Sin data"
    anio = "Sin data"
  }



  const data = [{ name, lastName, userName, email, enabledPrev: true, enabledNext: false, month: mes, anno: anio }]
  const dataControl = []
  obligations.forEach(o => {
    dataControl.push(o.historicalValue.length - 1)  // POr cada obllgacion guardo catidad de registros guardado en el array que contiene el historial de pagos
    var lastMonthRegister = []
    lastMonthRegister = o.historicalValue[o.historicalValue.length - 1] // Lleva el ultimo array de hisoricalValue a un unico array para su uso
    o.historical = {
      value: lastMonthRegister[0],
      date: lastMonthRegister[1],
      paid: lastMonthRegister[2],
      datePaid: lastMonthRegister[3],
      annotation: lastMonthRegister[4]
    }
  })
  await Users.findByIdAndUpdate(id, { control: dataControl })
  console.log(dataControl)
  res.render('main', { data, obligations })
})


router.get('/changemonth/:x', verifyAuth, async (req, res) => {
  const { name, lastName, userName, email } = req.user
  const id = req.user._id
  var { control } = req.user
  const dataControl = []
  const obligations = await Obligations.find({ userId: id }).lean()


  var mes
  var anio
  if (obligations.length != 0) {
    mes = (obligations[0].historicalValue[obligations[0].historicalValue.length - 1][1].toLocaleString('default', { month: 'long' }))
    anio = (obligations[0].historicalValue[obligations[0].historicalValue.length - 1][1].getFullYear())
  } else {
    mes = "Sin data"
    anio = "Sin data"
  }

  if (req.params.x === "prev") {
    var posible = false

    control.forEach(c => { if (c > 1) posible = true })

    if (posible) {
      control.forEach(c => {
        dataControl.push(c - 1)
      })
    }
  }

  if (req.params.x === "next") {
    control.forEach(c => {
      dataControl.push(c + 1)
    })
  }

  const data = [{ name, lastName, userName, email, enabledPrev: posible, enabledNext: true, month: mes, anno: anio }]
  obligations.forEach(o => {
    var lastMonthRegister = []

    if (dataControl[obligations.indexOf(o)] >= 0) {
      lastMonthRegister = o.historicalValue[dataControl[obligations.indexOf(o)]]
      o.historical = {
        value: lastMonthRegister[0],
        date: lastMonthRegister[1],
        paid: lastMonthRegister[2],
        datePaid: lastMonthRegister[3],
        annotation: lastMonthRegister[4]
      }
    } else {
      o.historical = {
        value: "NA",
        date: "NA",
        paid: "NA",
        datePaid: "NA",
        annotation: "NA"
      }

    }


  })

  await Users.findByIdAndUpdate(id, { control: dataControl })

  res.render('main', { data, obligations })
})


router.get('/loginnotok', (req, res) => { res.render("notlogin") })


module.exports = router


