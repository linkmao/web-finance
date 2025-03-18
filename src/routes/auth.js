const {Router}= require('express')
const passport = require ('passport')
router=Router()

const {verifyEmail, verifyPass}= require('../midleware/users')
const {signUp,signInToken, signUpPostman}=require('../controller/auth')

// Signup usando frontend
router.post('/signup',verifyEmail,verifyPass,signUp)

// Signup usando postman
router.post('/signup/postman',signUpPostman)

// version Token
router.post('/signintoken',signInToken)

// vesrion passport
router.post('/signin', passport.authenticate('local', {
  successRedirect: '../../mainview',
  failureRedirect: '../../loginnotok',
  failureFlash: false
}), (req, res) => { res.json({mensajeError: 'Usuario o contraseña no valido'}) })

// Peticion get para desloguear usuarios
router.get('/logout',(req,res,next)=>{
  req.logout(err=>{
    if (err) {return next(err)}
    res.redirect('/')
  })
})

module.exports = router