const User = require ('../models/User')
const jwt=require('jsonwebtoken')

const signUp = async (req, res) => {
  const { email, userName, pass, name, lastName } = req.body
  const newUser = new User({ email, userName, pass: await User.encryptPass(pass), name, lastName })
  await newUser.save()
  res.send(newUser)
}

const signIn = async (req, res) => {
  const {email, pass} = req.body
  const userFound = await User.findOne({ email })
  if (!userFound) {
    res.json({ message: "Usuario no encontrado" })
  } else {
    const matchPass = await userFound.comparePass(pass, userFound.pass)
    if (matchPass) {
        const token = jwt.sign({ id: userFound._id },"secreto",{ expiresIn: 60 * 60 * 24 })
      res.json({ token })
    } else {
      res.json({ message: "Contraseña incorrecta" })
    }
  }
}

module.exports={signUp,signIn}

