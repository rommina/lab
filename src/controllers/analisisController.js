const models = require("../models");

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

module.exports = {
getAnalisis,

};

