import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import productRoutes from "./src/routes/productRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Path setup (needed for ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve static 3D model files (so frontend can load .glb)
app.use("/models", express.static(path.join(__dirname, "public/models")));

// ✅ MongoDB connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Product routes
app.use("/api/products", productRoutes);

// ✅ Base route
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
