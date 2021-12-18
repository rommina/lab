

require("dotenv").config();
const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const cors= require ("cors");

const PORT= process.env.PORT || 5000;
const MONGO_URL=process.env.MONGO_DB_URL;


const app= express();
const router= require ("./src/routes/index");



app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(router);


const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log ("conectado a la base de datos");

        app.listen ({ port: PORT}, () =>  {
            console.log (`servidor corriendo en el puerto ${PORT}`);
        });
    }catch(error){
        console.log ( `Error: ${error}`);
        console.log ("no fu|+e posible conectarse a la base de datos")

    }
};

connectDb();


