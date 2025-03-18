const User = require('../models/User')
const jwt = require('jsonwebtoken')

const verifyEmail = async (req, res, next) => {
  const email = await User.findOne({ email: req.body.email })
  if (email)
    return res.send("Correo ya existe, el usuario NO FUE CREADO")
  next()
}


const verifyPass = (req,res, next)=>{
  const {pass,pass2}= req.body
  console.log(pass,pass2)
  if (pass != pass2) 
    return res.render("nuevousuario") // Nuevamente renderiza la pagina de nuevo usuario
  next()
} 

// Validacion en el caso de uso de token
const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"]
  if (!token) return res.status(403).json({ message: 'Token no encontrado' })
  const decoded = jwt.verify(token, "secreto")
  req.userId = decoded.id
  const user = await User.findById(req.userId, { pass: 0 })  //{password:0 }- es para que el retorno del suaurio no tenga la contraseña
  if (!user) return res.status(404).json({ message: 'Usuario no existe' })
  next()
}


// Validacion de que el usuario está logueado (usando passport)
const verifyAuth = (req,res,next)=>{
  if (req.isAuthenticated()) { return next() }
    res.status(404).redirect('/')
}


module.exports = { verifyEmail, verifyPass,verifyToken,verifyAuth }