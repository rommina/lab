const express =require ("express");
const router =express.Router();
const preparativosControler= requiere ("../controllers/preparativosControler");

router.get(`/`, preparativosControler.getPreparativos);


module.exports= router;

