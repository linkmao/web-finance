const {Schema,model}=require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema= new Schema({
email:{type:String},
userName:{type:String,required:true},
pass:{type:String,required:true},
name:{type:String,required:true},
lastName:{type:String,required:true}
},{versionKey:false})

// Creaciond el metodo para la encriptacion de la contraseña
userSchema.statics.encryptPass = async (pass)=>{
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(pass,salt)
}  

userSchema.methods.comparePass = async function (password) {
  return await bcrypt.compare(password, this.pass) // 
}

module.exports = model('User',userSchema)