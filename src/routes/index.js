const express =require ("express");
const analisisRouter= require ("./analisisRouter");
const obrasocialRouter = require ("./obrasocialRouter");
const preparativosRouter=  require ("./preparativosRouter");

const router = express.Router();

router.use ("/analisis", analisisRouter);
router.use ("/obrasocial", obrasocialRouter);
router.use("/preparativos", preparativosRouter);

module.exports= router;






