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
    const response = await models.analisis.findById(analisisId);
   
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
};
const addAnalisis = async (req, res) => {
  try {
    const idAnalisis = req.body.codigo;
    const nombreAnalisis = req.body.nombre;

    // validacion idAnalisis

    if (!idAnalisis) {
      return res.status(400).json({
        error: true,
        msg: "El campo del ID del analisis es requerido. Por favor, ingrese el id",
      });
    }

    if (!nombreAnalisis) {
      return res.status(400).json({
        error: true,
        msg: "El campo nombre de Analisis es requerido. Por favor, ingrese el nombre de la analisis",
      });
    }

    const analisis = new models.analisis(req.body);

    await analisis.save();
    res.status(200).json({
      data: analisis,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error,
      error: true,
    });
  }
};
const updateAnalisis = async (req, res) => {
  try {
    const analisisId = req.params.id;

    const analisis = await models.analisis.findByIdAndUpdate(
      analisisId,
      req.body,
      { new: true }//retorna el objeto actualizado//
    );

    if (analisis) {
      res.status(200).json({
        error: false,
        data: analisis,
      });
    } else {
      res.status(404).json({
        error: true,
        msg: "El análisis no existe",
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: error,
      error: true,
    });
  }
};
const deleteAnalisis = async (req, res) => {
  try {
    const analisisId = req.params.id;

    const response = await models.analisis.findByIdAndRemove(analisisId);

    if (response) {
      res.status(200).json({
        error: false,
        data: response,
        msg: `el analisis fue eliminado exitosamente`,
      });
    } else {
      res.status(400).json({
        error: true,
        msg: "el analisis no existe",
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: error,
      error: true,
    });
  }
};


module.exports = {
getAnalisis,
getAnalisisById,
addAnalisis,
updateAnalisis,
deleteAnalisis,

};

