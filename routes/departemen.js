const express = require("express");
const router = express.Router();
const departemenController = require("../controllers/departemenController");

// GET /api/departemen
router.get("/", departemenController.getAllDepartemen);

// GET /api/departemen/:id
router.get("/:id", departemenController.getDepartemenById);

// POST /api/departemen
router.post("/", departemenController.createDepartemen);

// PUT /api/departemen/:id
router.put("/:id", departemenController.updateDepartemen);

// DELETE /api/departemen/:id
router.delete("/:id", departemenController.deleteDepartemen);

module.exports = router;
