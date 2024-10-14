const { Mahasiswa, Jurusan } = require("../models");

// Get all Mahasiswa
exports.getAllMahasiswa = async (req, res, next) => {
  try {
    const mahasiswa = await Mahasiswa.findAll({
      include: [{ model: Jurusan, as: "jurusan" }],
    });
    res.status(200).json(mahasiswa);
  } catch (error) {
    next(error);
  }
};

// Get Mahasiswa by ID
exports.getMahasiswaById = async (req, res, next) => {
  try {
    const mahasiswa = await Mahasiswa.findByPk(req.params.id, {
      include: [{ model: Jurusan, as: "jurusan" }],
    });
    if (!mahasiswa) {
      return res.status(404).json({ message: "Mahasiswa not found" });
    }
    res.status(200).json(mahasiswa);
  } catch (error) {
    next(error);
  }
};

// Create Mahasiswa
exports.createMahasiswa = async (req, res, next) => {
  try {
    const { nama, jurusanId } = req.body;
    const mahasiswa = await Mahasiswa.create({ nama, jurusanId });
    res.status(201).json(mahasiswa);
  } catch (error) {
    next(error);
  }
};

// Update Mahasiswa
exports.updateMahasiswa = async (req, res, next) => {
  try {
    const { nama, jurusanId } = req.body;
    const mahasiswa = await Mahasiswa.findByPk(req.params.id);
    if (!mahasiswa) {
      return res.status(404).json({ message: "Mahasiswa not found" });
    }
    await mahasiswa.update({ nama, jurusanId });
    res.status(200).json(mahasiswa);
  } catch (error) {
    next(error);
  }
};

// Delete Mahasiswa
exports.deleteMahasiswa = async (req, res, next) => {
  try {
    const mahasiswa = await Mahasiswa.findByPk(req.params.id);
    if (!mahasiswa) {
      return res.status(404).json({ message: "Mahasiswa not found" });
    }
    await mahasiswa.destroy();
    res.status(200).json({ message: "Mahasiswa deleted successfully" });
  } catch (error) {
    next(error);
  }
};
