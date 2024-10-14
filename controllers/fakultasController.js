const { Fakultas, Departemen } = require("../models");

// Get all Fakultas
exports.getAllFakultas = async (req, res, next) => {
  try {
    const fakultas = await Fakultas.findAll({
      include: [{ model: Departemen, as: "departemens" }],
    });
    res.status(200).json(fakultas);
  } catch (error) {
    next(error);
  }
};

// Get Fakultas by ID
exports.getFakultasById = async (req, res, next) => {
  try {
    const fakultas = await Fakultas.findByPk(req.params.id, {
      include: [{ model: Departemen, as: "departemens" }],
    });
    if (!fakultas) {
      return res.status(404).json({ message: "Fakultas not found" });
    }
    res.status(200).json(fakultas);
  } catch (error) {
    next(error);
  }
};

// Create Fakultas
exports.createFakultas = async (req, res, next) => {
  try {
    const { nama } = req.body;
    const fakultas = await Fakultas.create({ nama });
    res.status(201).json(fakultas);
  } catch (error) {
    next(error);
  }
};

// Update Fakultas
exports.updateFakultas = async (req, res, next) => {
  try {
    const { nama } = req.body;
    const fakultas = await Fakultas.findByPk(req.params.id);
    if (!fakultas) {
      return res.status(404).json({ message: "Fakultas not found" });
    }
    await fakultas.update({ nama });
    res.status(200).json(fakultas);
  } catch (error) {
    next(error);
  }
};

// Delete Fakultas
exports.deleteFakultas = async (req, res, next) => {
  try {
    const fakultas = await Fakultas.findByPk(req.params.id);
    if (!fakultas) {
      return res.status(404).json({ message: "Fakultas not found" });
    }
    await fakultas.destroy();
    res.status(200).json({ message: "Fakultas deleted successfully" });
  } catch (error) {
    next(error);
  }
};
