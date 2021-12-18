const express =require ("express");
const analisisRouter= require ("./analisisRouter");
const obrasocialRouter = require ("./obrasocialRouter");


const router = express.Router();

router.use ("/analisis", analisisRouter);
router.use ("/obrasocial", obrasocialRouter);


module.exports= router;






