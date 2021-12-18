


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
      const isValid = objectIdValidator.isValid(obrasocialId);
      
       console.log(isValid);
      if(!isValid){
        res.status(200).json({
          msg: "el id ingresado no corresponde a un Id generado por mongo",
          error: true,
        });
      }
      const response = await models.obrasocial.findById(obrasocialId);
     
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
  };
  const addObrasocial = async (req, res) => {
    try {
      const idObrasocial = req.body.codigo;
      const nombreObrasocial = req.body.nombre;
  // validacion idObrasocial

  if (!idObrasocial) {
    return res.status(400).json({
      error: true,
      msg: "El campo del ID del Obrasocial es requerido. Por favor, ingrese el id",
    });
  }

  if (!nombreObrasocial) {
    return res.status(400).json({
      error: true,
      msg: "El campo nombre de Obrasocial es requerido. Por favor, ingrese el nombre de la obra social",
    });
  }

  const obrasocial = new models.obrasocial(req.body);
  
  await obrasocial.save();
  res.status(200).json({
    data: obrasocial,
    error: false,
  });
} catch (error) {
  return res.status(500).json({
    msg: error,
    error: true,
  });
}
};
const updateObrasocial = async (req, res) => {
  try {
    const obrasocialId = req.params.id;

    const obrasocial = await models.obrasocial.findByIdAndUpdate(
      obrasocialId,
      req.body,
      { new: true }//retorna el objeto actualizado//
    );

    if (obrasocial) {
      res.status(200).json({
        error: false,
        data: obrasocial,
      });
    } else {
      res.status(404).json({
        error: true,
        msg: "la obra social no existe",
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: error,
      error: true,
    });
  }
};
const deleteObrasocial = async (req, res) => {
  try {
    const obrasocialId = req.params.id;

    const response = await models.obrasocial.findByIdAndRemove(obrasocialId);

    if (response) {
      res.status(200).json({
        error: false,
        data: response,
        msg: `la obra social fue eliminada exitosamente`,
      });
    } else {
      res.status(400).json({
        error: true,
        msg: "la obra social no existe",
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
getObrasocial,
getObrasocialById,
addObrasocial,
updateObrasocial,
deleteObrasocial,

};