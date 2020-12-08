const Car = require("../models/Car");
const Car = require("../models/Car");

//get all
const carsList = () => {
    return Car.find();
}
//create
const createCar = (car) => {
    Car.create(car);
}
//update
const updateCar = (id, car) => {
    Car.findByIdAndUpdate(id, car, ()=>{
        return car;
    });
}
//delete
const deleteCar = (id) => {
    Car.remove(id);
}

module.exports = { carsList }