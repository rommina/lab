const express =require ("express");
const router =express.Router();
const analisisController = require ("../controllers/analisisController");

router.get(`/`, analisisController.getAnalisis);


module.exports= router;


