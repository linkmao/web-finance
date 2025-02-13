const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('../models/User')

passport.use(new LocalStrategy({ usernameField: 'email' },
  async (email, password, done) => {
    console.log("ENTRA POR FAVOR")
    console.log(email)
    console.log(password)
    const user = await User.findOne({ email:email })
    if (!user)
      return done(null, false, { message: "Correo no encontrado" })
    const match = await user.comparePass(password)
    if(match)
      return done(null,user)
    return done (null,false,{message:"Contraseña no encontrada"})
  }
))

passport.serializeUser((user,done)=>{done(null,user.id)})

passport.deserializeUser((id,done)=>{
   User.findById(id,(err,user)=>{done(err,user)})
})

