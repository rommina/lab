const mongoose = require("mongoose");

const obrasocialSchema = mongoose.Schema({
    codigo:{
        type: String,
        required: true,
    },
    nombre:{
        type:String,
        required: true,
    },
    arancel: {
        type: String,
        
    },
    digitales:{
        type:String,
        enum:[ "si","no"],
    },

});

module.exports =mongoose.model ("obrasocial", obrasocialSchema,"obrasocial"); 