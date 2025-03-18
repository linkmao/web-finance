const {Router}=require('express')
const router=Router()
const {getUsers,getUser,updateUser, deleteUser, deleteAllUsers}=require('../controller/users')
const {verifyToken}=require('../midleware/users')


// Rutas development
router.get('/',getUsers)
router.get('/:id',getUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
router.delete('/dev/delete',deleteAllUsers)



// Rutas de usuario final

module.exports=router
