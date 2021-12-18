const express =require ("express");
const router =express.Router();
const analisisController = require ("../controllers/analisisController");

router.get("/", analisisController.getAnalisis);
router.get("/:id", analisisController.getAnalisisById);
router.post("/", analisisController.addAnalisis);
router.put("/:id", analisisController.updateAnalisis);
router.delete("/:id", analisisController.deleteAnalisis);

module.exports= router;


