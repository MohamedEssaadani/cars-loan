const { json } = require("express");
const express = require("express");
const app = express();
const { bodyTypeList } = require("./controllers/bodyTypeController");
const { carsList } = require("./controllers/carsController");
 
// const dbUrl = "mongodb+srv://essaadani:mongoAtlasCarsloan@cluster0.4bfd9.mongodb.net/cars-loan?retryWrites=true&w=majority";


app.use("/", (req, res)=>{
     res.json(bodyTypeList);    
});

app.use("/inventory", (req, res)=>{
    res.json(carsList);
});



app.use(()=>{
    res.end("ERROR");
})

app.listen(3000, ()=>{
    console.log("Listening at port 3000");
})


