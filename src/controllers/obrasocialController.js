


const models = require("../models");
const mongoose = require ("mongoose");

const objectIdValidator = mongoose.Types.ObjectId;

const getObrasocial = async (req, res) => {
    try{
      const response = await models.obrasocial.find();

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
const getObrasocialById = async (req, res) => {
    try{
      const obrasocialId = req.params.id;
      const isValid = objectIdValidator.isvalid(obrasocialId);
      
       console.log(isvalid);
      if(!isValid){
        res.status(200).json({
          msg: "el id ingresado no corresponde a un Id generado por mongo",
          error: true,
        });
      }
      const response = await models.obrasocial.finById(obrasocialId);
     
      if(response){
        res.status(200).json({
          data: response,
          error: false,
        });
      }else {
        res.status(404).json({
          msg:`la obra social con id ${obrasocialId} no existe`,
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
getObrasocial,
getObrasocialById,

};