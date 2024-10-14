const { Departemen, Fakultas, Jurusan } = require("../models");

// Get all Departemen
exports.getAllDepartemen = async (req, res, next) => {
  try {
    const departemen = await Departemen.findAll({
      include: [
        { model: Fakultas, as: "fakultas" },
        { model: Jurusan, as: "jurusans" },
      ],
    });
    res.status(200).json(departemen);
  } catch (error) {
    next(error);
  }
};

// Get Departemen by ID
exports.getDepartemenById = async (req, res, next) => {
  try {
    const departemen = await Departemen.findByPk(req.params.id, {
      include: [
        { model: Fakultas, as: "fakultas" },
        { model: Jurusan, as: "jurusans" },
      ],
    });
    if (!departemen) {
      return res.status(404).json({ message: "Departemen not found" });
    }
    res.status(200).json(departemen);
  } catch (error) {
    next(error);
  }
};

// Create Departemen
exports.createDepartemen = async (req, res, next) => {
  try {
    const { nama, fakultasId } = req.body;
    const departemen = await Departemen.create({ nama, fakultasId });
    res.status(201).json(departemen);
  } catch (error) {
    next(error);
  }
};

// Update Departemen
exports.updateDepartemen = async (req, res, next) => {
  try {
    const { nama, fakultasId } = req.body;
    const departemen = await Departemen.findByPk(req.params.id);
    if (!departemen) {
      return res.status(404).json({ message: "Departemen not found" });
    }
    await departemen.update({ nama, fakultasId });
    res.status(200).json(departemen);
  } catch (error) {
    next(error);
  }
};

// Delete Departemen
exports.deleteDepartemen = async (req, res, next) => {
  try {
    const departemen = await Departemen.findByPk(req.params.id);
    if (!departemen) {
      return res.status(404).json({ message: "Departemen not found" });
    }
    await departemen.destroy();
    res.status(200).json({ message: "Departemen deleted successfully" });
  } catch (error) {
    next(error);
  }
};
