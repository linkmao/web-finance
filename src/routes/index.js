const {Router}= require('express')
const router=Router()

router.get('/mao',(req,res)=>{res.send("<h2>Hola Mao</h2>")})


module.exports = router