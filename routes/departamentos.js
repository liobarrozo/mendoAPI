const express = require('express');
const router = express.Router();
const departamentos = require('../data/departamentos.json');

// GET /api/departamentos
router.get('/', (req, res) => {
  res.json(departamentos);
});

// GET /api/departamentos/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const departamento = departamentos.find(dep => dep.id === id);
  if (departamento) {
    res.json(departamento);
  } else {
    res.status(404).json({ error: "Departamento no encontrado" });
  }
});

app.get('/api/regiones/:region', (req, res) => {
  const regionParam = req.params.region.toLowerCase();

  // Normalizar las regiones para comparar
  const normalizar = str => str.trim().toLowerCase();

  const departamentosFiltrados = departamentos.filter(dep =>
    normalizar(dep.region) === regionParam
  );

  if (departamentosFiltrados.length === 0) {
    return res.status(404).json({ error: 'Región no encontrada o sin departamentos registrados' });
  }

  res.json({
    region: departamentosFiltrados[0].region,
    cantidad: departamentosFiltrados.length,
    departamentos: departamentosFiltrados
  });
});

module.exports = router;
