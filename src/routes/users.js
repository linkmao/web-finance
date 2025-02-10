const {Router}=require('express')
const router=Router()
const {getUsers,newUser,getUser,updateUser, deleteUser}=require('../controller/users')

router.get('/',getUsers)
router.get('/:id',getUser)
router.post('/',newUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports=router
