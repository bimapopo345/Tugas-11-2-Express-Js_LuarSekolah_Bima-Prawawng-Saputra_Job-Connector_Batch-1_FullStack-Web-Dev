const express = require("express");
const router = express.Router();
const jurusanController = require("../controllers/jurusanController");

// GET /api/jurusan
router.get("/", jurusanController.getAllJurusan);

// GET /api/jurusan/:id
router.get("/:id", jurusanController.getJurusanById);

// POST /api/jurusan
router.post("/", jurusanController.createJurusan);

// PUT /api/jurusan/:id
router.put("/:id", jurusanController.updateJurusan);

// DELETE /api/jurusan/:id
router.delete("/:id", jurusanController.deleteJurusan);

module.exports = router;
