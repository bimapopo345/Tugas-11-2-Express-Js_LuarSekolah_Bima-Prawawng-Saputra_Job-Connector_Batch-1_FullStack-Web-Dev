const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");
const { sequelize } = require("./models");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const fakultasRoutes = require("./routes/fakultas");
const departemenRoutes = require("./routes/departemen");
const jurusanRoutes = require("./routes/jurusan");
const mahasiswaRoutes = require("./routes/mahasiswa");

// Endpoint Root untuk Verifikasi
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api/fakultas", fakultasRoutes);
app.use("/api/departemen", departemenRoutes);
app.use("/api/jurusan", jurusanRoutes);
app.use("/api/mahasiswa", mahasiswaRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Sync database and start server
const PORT = process.env.PORT || 5000;

sequelize
  .sync({ force: false }) // Set to true untuk menghapus dan membuat ulang tabel setiap restart (gunakan hati-hati)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = app; // Untuk pengujian
