const {Router}=require('express')
const router=Router()
const {getObligations,newObligation,getObligation,updateObligation, updateObligationHistorical, deleteObligation, deleteAllObligation}=require('../controller/obligations')
const {verifyToken}= require('../midleware/users')


// Rutas de desarrollador
router.get('/',verifyToken,getObligations)
router.get('/:id',getObligation)
router.post('/',verifyToken,newObligation)
router.put('/:id',updateObligation)
router.put('/historical/:id',updateObligationHistorical)
router.delete('/:id',deleteObligation)
router.delete('/dev/delete',deleteAllObligation)



// Rutas de usuario final (usando passport)



module.exports=router
