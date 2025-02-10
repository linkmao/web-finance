const express= require('express')
const entorno= require('dotenv')
const app = express()
const index= require('./routes/index')
const users = require('./routes/users')
const obligations = require('./routes/obligations')

// Activo la posibilida de acceder a la variable de entorno
entorno.config()
// configuracion de la base de datos
require('./config/db')
app.use(express.json())

app.set('PORT',3000)
app.listen(app.get('PORT'),()=>{console.log("app listen in port: ",app.get('PORT'))})


app.use('/',index)
app.use('/users',users)
app.use('/obligations',obligations)


