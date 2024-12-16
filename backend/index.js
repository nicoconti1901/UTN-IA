import express from "express";
import cors from "cors";
import idolos  from "./database/Idolos_de_River.js";

// Crear el servidor de express
const app = express();
const PORT = process.env.PORT ?? 3000;

// Configurar CORS
app.use(cors());

// Rutas
app.get("/api/idolos", (req, res) => {
  res.json(idolos);
});

app.listen(PORT);
console.log(`Server running on port ${PORT}`);