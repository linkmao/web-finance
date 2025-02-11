const Obligations = require('../models/Obligation')

const newObligation = async (req, res) => {
  const { nameObligation, description, expectedValue, fixedValue, paid, historicalValue } = req.body
  userId= req.userId
  const newObligation = new Obligations({ nameObligation, description,userId , expectedValue, fixedValue, paid, historicalValue })
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

module.exports = { newObligation, getObligations, getObligation, updateObligation, deleteObligation }