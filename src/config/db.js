const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL).then(db=>console.log("Base de datos db-web-finance conectada")).catch(err=>console.log(err))