const { Jurusan, Departemen, Mahasiswa } = require("../models");

// Get all Jurusan
exports.getAllJurusan = async (req, res, next) => {
  try {
    const jurusan = await Jurusan.findAll({
      include: [
        { model: Departemen, as: "departemen" },
        { model: Mahasiswa, as: "mahasiswas" },
      ],
    });
    res.status(200).json(jurusan);
  } catch (error) {
    next(error);
  }
};

// Get Jurusan by ID
exports.getJurusanById = async (req, res, next) => {
  try {
    const jurusan = await Jurusan.findByPk(req.params.id, {
      include: [
        { model: Departemen, as: "departemen" },
        { model: Mahasiswa, as: "mahasiswas" },
      ],
    });
    if (!jurusan) {
      return res.status(404).json({ message: "Jurusan not found" });
    }
    res.status(200).json(jurusan);
  } catch (error) {
    next(error);
  }
};

// Create Jurusan
exports.createJurusan = async (req, res, next) => {
  try {
    const { nama, departemenId } = req.body;
    const jurusan = await Jurusan.create({ nama, departemenId });
    res.status(201).json(jurusan);
  } catch (error) {
    next(error);
  }
};

// Update Jurusan
exports.updateJurusan = async (req, res, next) => {
  try {
    const { nama, departemenId } = req.body;
    const jurusan = await Jurusan.findByPk(req.params.id);
    if (!jurusan) {
      return res.status(404).json({ message: "Jurusan not found" });
    }
    await jurusan.update({ nama, departemenId });
    res.status(200).json(jurusan);
  } catch (error) {
    next(error);
  }
};

// Delete Jurusan
exports.deleteJurusan = async (req, res, next) => {
  try {
    const jurusan = await Jurusan.findByPk(req.params.id);
    if (!jurusan) {
      return res.status(404).json({ message: "Jurusan not found" });
    }
    await jurusan.destroy();
    res.status(200).json({ message: "Jurusan deleted successfully" });
  } catch (error) {
    next(error);
  }
};
