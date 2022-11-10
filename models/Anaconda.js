const mongoose = require("mongoose")
const AnacondaSchema = mongoose.Schema({
    Ananconda_color:(String),
    Ananconda_petname:(String),
    Ananconda_price:(Number)
})
module.exports = mongoose.model("Anaconda",AnacondaSchema)