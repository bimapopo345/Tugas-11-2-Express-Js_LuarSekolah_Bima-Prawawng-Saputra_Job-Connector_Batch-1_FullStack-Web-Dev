const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswaController");

// GET /api/mahasiswa
router.get("/", mahasiswaController.getAllMahasiswa);

// GET /api/mahasiswa/:id
router.get("/:id", mahasiswaController.getMahasiswaById);

// POST /api/mahasiswa
router.post("/", mahasiswaController.createMahasiswa);

// PUT /api/mahasiswa/:id
router.put("/:id", mahasiswaController.updateMahasiswa);

// DELETE /api/mahasiswa/:id
router.delete("/:id", mahasiswaController.deleteMahasiswa);

module.exports = router;
