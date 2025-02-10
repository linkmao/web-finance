const {Schema,model}=require('mongoose')

const userSchema= new Schema({
email:{type:String},
userName:{type:String,required:true},
pass:{type:String,required:true},
name:{type:String,required:true},
lastName:{type:String,required:true}
},{versionKey:false})

module.exports = model('User',userSchema)