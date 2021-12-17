const models = require("../models");
const mongoose = require ("mongoose");

const objectIdValidator = mongoose.Types.ObjectId;

const getAnalisis = async (req, res) => {
     try{
       const response = await models.analisis.find();

       return res.status(200).json({
       data: response,
       error: false,
       });
     }catch( error) {
         return res.status(500).json({
             msg: error,
             error: true,
         });

     }
};

const getAnalisisById = async (req, res) => {
  try{
    const analisisId = req.params.id;
    console.log(req.param.id);
    const isValid = objectIdValidator.isValid(analisisId);
    
     console.log(isValid);
    if(!isValid){
      res.status(200).json({
        msg: "el id ingresado no corresponde a un Id generado por mongo",
        error: true,
      });
    }
    const response = await models.analisis.finById(analisisId);
   
    if(response){
      res.status(200).json({
        data: response,
        error: false,
      });
    }else {
      res.status(404).json({
        msg: `el análisis con id ${analisisId} no existe`,
        error: true,
      });
    }

  }catch (error){
    res.status(500).json({
      msg: error,
      error: true,
  });
}
}
module.exports = {
getAnalisis,
getAnalisisById,

};

