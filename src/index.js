const express = require('express')
const methodOverride = require('method-override')
const entorno = require('dotenv')
const app = express()

const passport = require('passport')
const session = require('express-session')

const path = require('path') // para la obtencion de rutas del proyecto
const exphbs = require('express-handlebars') // Para el funcionamiento de handlebaras

const {verifyAuth} = require('./midleware/users')




  app.use(express.urlencoded({ extended: true })) // envio de datos de fomrulario al backend
  app.use(methodOverride('_method')) // Evaluar esta es para que? inputs ocultos?

  require('./config/passport')
  app.use(session({
    secret:'Cualquier cosa',
    resave:true,
    saveUninitialized:true
  }))
  app.use(passport.initialize())
  app.use(passport.session())

const index = require('./routes/index')
const auth = require('./routes/auth')
const users = require('./routes/users')
const obligations = require('./routes/obligations')

// Activo la posibilida de acceder a la variable de entorno
entorno.config()
// configuracion de la base de datos
require('./config/db')
app.use(express.json())


// Configuracion del motor HTML handlebasrs
app.set('views', path.join(__dirname, 'views'))
app.set('public', path.join(__dirname, 'public'))
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main.hbs',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}))
app.set('view engine', '.hbs') // con esta linea queda lista la configuracion del motor de plantilla

app.use(express.static(app.get('public'))) //Configuracion carpeta publica (archivos estaticos) 


// Inicio de la escucha del puerto
app.set('PORT', 3000)
app.listen(app.get('PORT'), () => { console.log('app listen in port: ', app.get('PORT')) })

app.use('/api/auth', auth)
app.use('/api/users',users)
app.use('/api/obligations', obligations)
app.use('/',index)
