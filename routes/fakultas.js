const express = require("express");
const router = express.Router();
const fakultasController = require("../controllers/fakultasController");

// GET /api/fakultas
router.get("/", fakultasController.getAllFakultas);

// GET /api/fakultas/:id
router.get("/:id", fakultasController.getFakultasById);

// POST /api/fakultas
router.post("/", fakultasController.createFakultas);

// PUT /api/fakultas/:id
router.put("/:id", fakultasController.updateFakultas);

// DELETE /api/fakultas/:id
router.delete("/:id", fakultasController.deleteFakultas);

module.exports = router;
