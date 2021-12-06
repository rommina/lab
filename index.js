const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const cors= require ("cors");

const PORT= 3000;
const MONGO_URL= "mongodb+srv://romina:Romina2185@cluster0.dtszr.mongodb.net/laboratorio?retryWrites=true&w=majority ";


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
        console.log ("no fue posible conectarse a la base de datos")

    }
};

connectDb();


