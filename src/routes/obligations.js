const {Router}=require('express')
const router=Router()
const {getObligations,newObligation,getObligation,updateObligation, deleteObligation, deleteAllObligation}=require('../controller/obligations')
const {verifyToken}= require('../midleware/users')

router.get('/',verifyToken,getObligations)
router.get('/:id',getObligation)
router.post('/',verifyToken,newObligation)
router.put('/:id',updateObligation)
router.delete('/:id',deleteObligation)



// Rutas de desarrollador
router.delete('/dev/delete',deleteAllObligation)

module.exports=router
