//cors is used to send the request from different url
const cors=require("cors");
const express = require("express");
//dotenv is used to increse the security of the data by restricting the access
const dotenv = require("dotenv");
//mongoose packege is used to access the database of mongodb
const mongoose = require("mongoose");
//.config method is used to configure the database(a .env file is to be created having a variable which has the url in it)
dotenv.config();
const aap=express();
//connecting the mongo db
mongoose.connect(
    process.env.pass,
    {useUnifiedTropology:true,useNewUrlParser:true},
    ()=>console.log("database is online")
);
//import routs
const productRouts=require("./routes/product");
//route middlewere
aap.use("/api.products",productRouts);
//middleware for post ,the middle were is a parser which sends the data of body 
aap.use(express.json());
aap.use(cors());
aap.listen(4000,()=>{console.log("server is running")});
