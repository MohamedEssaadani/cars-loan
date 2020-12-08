const mongoose = require("mongoose");
const { Schema } = mongoose;

const bodyTypeSchema = new Schema({
    name:String, 
    picture:String
}, { timestamps:true });

const BodyType = mongoose.model("BodyType", bodyTypeSchema);

module.exports = BodyType;