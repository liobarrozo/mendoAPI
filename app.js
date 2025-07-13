const express = require('express');
const app = express();
const cors = require('cors');
const departamentosRoutes = require('./routes/departamentos');

app.use(cors()); // permite que cualquier frontend consuma la API
app.use('/api/departamentos', departamentosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ MendoAPI corriendo en http://localhost:${PORT}`);
});
