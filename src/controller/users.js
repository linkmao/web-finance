const User= require('../models/User')

const newUser =async (req,res)=>{
  const {email,userName,pass,name,lastName}= req.body
  const newUser=new User({email,userName,pass,name,lastName})
  await newUser.save()
  res.json({email,userName,pass,name,lastName})
}

const getUsers =async(req,res)=>{
  const users= await User.find()
  console.log(users)
  res.send(users)
}

module.exports = {newUser,getUsers}
