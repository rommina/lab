const express =require ("express");
const router =express.Router();
const obrasocialController = require("../controllers/obrasocialController");

router.get(`/`, obrasocialController.getObrasocial);
router.get(`/:id`, obrasocialController.getObrasocialById);
router.post("/", obrasocialController.addObrasocial);
router.put("/:id", obrasocialController.updateObrasocial);
router.delete("/:id", obrasocialController.deleteObrasocial);

module.exports= router;

