const mongoose = require("mongoose")
const AnacondaSchema = mongoose.Schema({
    Ananconda_color:(String),
    Ananconda_petname:{type:String,length:15},
    Ananconda_price:{type:Number,min:1000,max:100000000}
})
module.exports = mongoose.model("Anaconda",AnacondaSchema)