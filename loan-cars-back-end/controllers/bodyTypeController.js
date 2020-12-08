const BodyType = require("../models/BodyType.js");

//get all
const bodyTypeList = () => {
    return BodyType.find();
}
//create
const createbodyType = (bodyType) => {
    BodyType.create(bodyType);
}
//update
const updateBodyType = (id, bodyType) => {
    BodyType.findByIdAndUpdate(id, bodyType, ()=>{

    });
}
//delete
const deleteBodyType = (id) => {
    BodyType.remove(id);
}

module.exports = { bodyTypeList }