const mongose = require('mongoose')
const productSchema = mongose.Schema({
    id:{type:String},
    title:{type:String},
    imgURL:{type:String},
    category:{type:String},
    calories:{type:Number},
    qty:{type:Number,default:1},
    price:{type:Number},
    desc:{type:String}
})

const productmodels = mongose.model('productmodels',productSchema)
module.exports=productmodels