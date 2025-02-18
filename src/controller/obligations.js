const Obligations = require('../models/Obligation')
const formatHistorical= require('../logic/logic')

const newObligation = async (req, res) => {
  const { nameObligation, description, expectedValue, fixedValue, limitDay, initialDate } = req.body
  userId= req.userId // ESTE ID DE USUARIO VIENE DEL TOKEN
  const historicalValue = formatHistorical(initialDate,expectedValue)
  const newObligation = new Obligations({ nameObligation, description,userId , expectedValue, fixedValue, limitDay, historicalValue })
  await newObligation.save()
  res.send(newObligation)
}

const updateObligation = async (req, res) => {
  const id = req.params.id
  const data = req.body
  const updatedObligation = await Obligations.findByIdAndUpdate(id, data)
  res.send(updatedObligation)
}

const getObligations = async (req, res) => {
  const userId=req.userId
  const obligations = await Obligations.find({userId})
  res.send(obligations)
}

const getObligation = async (req, res) => {
  const id = req.params.id
  const obligation = await Obligations.findById(id)
  res.send(obligation)

}

const deleteObligation = async (req, res) => {
  const id = req.params.id
  const deletedObligation = await Obligations.findByIdAndDelete(id)
  res.send(deletedObligation)
}


// controlador de desarrollo
const deleteAllObligation = async (req,res)=>{
  const deleteAll = await Obligations.deleteMany()
  deleteAll.message= "SE HAN BORRADO TODAS LAS OBLIGACIONES"
  console.log("SE HAN BORRADO TODAS LAS OBLIGACIONES")
  res.status(200).send(deleteAll)
}




module.exports = { newObligation, getObligations, getObligation, updateObligation, deleteObligation, deleteAllObligation}