const {Router}=require('express')
const router=Router()
const {getUsers,newUser}=require('../controller/users')


router.post('/',newUser)
router.get('/',getUsers)

module.exports=router
