const express =require ("express");
const router =express.Router();
const analisisController = require ("../controllers/analisisController");

router.get("/", analisisController.getAnalisis);
router.get("/:id", analisisController.getAnalisisById);

module.exports= router;


