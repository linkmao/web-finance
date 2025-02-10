const {Schema, model}= require('mongoose')

const obligationSchema = new Schema({
nameObligation:{type:String, required:true},
description:{type:String},
idUser:{type:String,required:true},
expectedValue:{type:Number},
fixedValue:{type:Boolean},
paid:{type:Boolean},
hitoricalValue:{type:Array}
},{versionKey:false})

module.exports=model('Obligation',obligationSchema)