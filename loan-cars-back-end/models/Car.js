const mongoose = require("mongoose");
const { Schema } = mongoose;

const CarSchema = new Schema({
    make:String, 
    model:String, 
    bodyType:String, 
    transmission:String, 
    price:Float32Array, 
    year:Int16Array, 
    kilometres:Int16Array, 
    picture:String, 
}, {timestamps:true});

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;