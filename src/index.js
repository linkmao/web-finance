const express = require('express')
const methodOverride = require('method-override')
const entorno = require('dotenv')
const app = express()

const passport = require('passport')
const session = require('express-session')

app.use(express.urlencoded({ extended: true })) // envio de datos de fomrulario al backend
// app.use(methodOverride('_method')) 

require('./config/passport')
app.use(session({
  secret:'Cualquier cosa',
  resave:true,
  saveUninitialized:true
}))
app.use(passport.initialize())
app.use(passport.session())


const auth = require('./routes/auth')
const users = require('./routes/users')
const obligations = require('./routes/obligations')

// Activo la posibilida de acceder a la variable de entorno
entorno.config()
// configuracion de la base de datos
require('./config/db')
app.use(express.json())

app.set('PORT', 3000)
app.listen(app.get('PORT'), () => { console.log('app listen in port: ', app.get('PORT')) })

app.use('/auth', auth)
app.use('/users', users)
app.use('/obligations', obligations)

app.get('/',(req,res)=>{res.send(`<form action="/auth/signin" method="POST">
  <input name='email'>
  <input name='password'>
  <button type="submit">Ingresa</button>
  </form>`)})

app.get('/loginok',(req,res)=>{res.send("<h1>Usuario logueado</h1>")})
app.get('/loginnotok',(req,res)=>{res.send("<h1>Usuario erroneo</h1>")})

