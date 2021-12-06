const mongoose = require("mongoose");

const analisisSchema = mongoose.Schema(
    {
        codido: {
            type: String,
            required: true,
        },
        nombre: {
            type: String,
            required: true,
        },
        UB: {
            type: String,
         },
        frecuencia: {
            type: String,
         },
         idprep: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "preparativos",
            required: true,
        },
 });

 module.exports = mongoose.model("analisis", analisisSchema);
