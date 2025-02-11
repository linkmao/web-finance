const User = require('../models/User')
const jwt = require('jsonwebtoken')

const verifyEmail = async (req, res, next) => {
  const email = await User.findOne({ email: req.body.email })
  if (email)
    return res.send("Correo ya existe, el usuario NO FUE CREADO")
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

module.exports = { verifyEmail, verifyToken }