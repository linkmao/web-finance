const {Router}= require('express')
const passport = require ('passport')
router=Router()

const {verifyEmail}= require('../midleware/users')
const {signUp,signInToken}=require('../controller/auth')

router.post('/signup',verifyEmail,signUp)

// version Token
router.post('/signintoken',signInToken)

router.post('/signin', passport.authenticate('local', {
  successRedirect: '../loginok',
  failureRedirect: '../loginnotok',
  failureFlash: false
}), (req, res) => { res.json({mensajeError: 'Usuario o contraseña no valido'}) })

module.exports = router