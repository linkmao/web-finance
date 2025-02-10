const {Router}=require('express')
const router=Router()
const {getObligations,newObligation,getObligation,updateObligation, deleteObligation}=require('../controller/obligations')

router.get('/',getObligations)
router.get('/:id',getObligation)
router.post('/',newObligation)
router.put('/:id',updateObligation)
router.delete('/:id',deleteObligation)

module.exports=router
