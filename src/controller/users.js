const User = require('../models/User')


const updateUser = async (req, res) => {
  const id = req.params.id
  const data = req.body
  const updatedUser = await User.findByIdAndUpdate(id, data)
  res.send(updatedUser)
}

const getUsers = async (req, res) => {
  const users = await User.find()
   res.send(users)
}

const getUser = async (req, res) => {
  const id = req.params.id
  const user = await User.findById(id)
  res.send(user)

}

const deleteUser = async (req, res) => {
  const id = req.params.id
  const deletedUser = await User.findByIdAndDelete(id)
  res.send(deletedUser)
}


// controlador de desarrollo
const deleteAllUsers = async (req,res)=>{
  const deleteAll = await User.deleteMany()
  deleteAll.message= "SE HAN BORRADO TODOS LOS USUARIOS"
  console.log("SE HAN BORRADO TODOS LOS USUARIOS")
  res.status(200).send(deleteAll)
}



module.exports = {getUsers, getUser, updateUser, deleteUser, deleteAllUsers }
