const {Schema, model}= require('mongoose')

const obligationSchema = new Schema({
nameObligation:{type:String, required:true},
description:{type:String},
userId:{type:String,required:true},
expectedValue:{type:Number},
fixedValue:{type:Boolean},
limitDay:{type:Number},
historicalValue:{type:Array}
},{versionKey:false})

module.exports=model('Obligation',obligationSchema)