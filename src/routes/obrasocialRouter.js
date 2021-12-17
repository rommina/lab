const express =require ("express");
const router =express.Router();
const obrasocialController = require("../controllers/obrasocialController");

router.get(`/`, obrasocialController.getObrasocial);
router.get(`/:id`, obrasocialController.getObrasocialById);

module.exports= router;

