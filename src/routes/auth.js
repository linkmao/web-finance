const {Router}= require('express')
router=Router()

const {verifyEmail}= require('../midleware/users')
const {signUp,signIn}=require('../controller/auth')

router.post('/signup',verifyEmail,signUp)
router.post('/signin',signIn)

module.exports = router