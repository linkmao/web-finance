const {Router}=require('express')
const router=Router()
const {getUsers,getUser,updateUser, deleteUser}=require('../controller/users')
const {verifyToken}=require('../midleware/users')

router.get('/',verifyToken,getUsers)
router.get('/:id',getUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports=router
