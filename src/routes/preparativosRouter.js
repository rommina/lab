const express =require ("express");
const router =express.Router();
const preparativosController = require ("../controllers/preparativosController");

router.get(`/`, preparativosController.getPreparativos);


module.exports= router;

