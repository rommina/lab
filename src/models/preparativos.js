const mongoose =require ("mongoose");


const preparativosSchema = mongoose.Schema({
    codigo:{
        type: String,
        require: true,
    },
    nombre:{
        type: String,
        require: true,
    },
    imagen:{
        type: String,
    },

});

module.exports = mongoose.model("preparativos", preparativosSchema, "preparativos");