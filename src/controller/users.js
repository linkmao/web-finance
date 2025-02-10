const User= require('../models/User')

const newUser =async (req,res)=>{
  const {email,userName,pass,name,lastName}= req.body
  const newUser=new User({email,userName,pass,name,lastName})
  await newUser.save()
  res.send(newUser)
}

const updateUser=async (req,res)=>{
const id=req.params.id
const data = req.body
const updatedUser=await User.findByIdAndUpdate(id,data)
res.send(updatedUser)
}

const getUsers =async(req,res)=>{
  const users= await User.find()
  console.log(users)
  res.send(users)
}

const getUser = async(req,res)=>{
  const id =req.params.id
  const user = await User.findById(id)
  console.log(user)
  res.send(user)
  
}

const deleteUser =async (req,res)=>{
  const id = req.params.id
  const deletedUser= await User.findByIdAndDelete(id)
  res.send(deletedUser)
}

module.exports = {newUser,getUsers,getUser,updateUser,deleteUser}
