const express = require('express');
const router = express.Router();
const departamentos = require('../data/departamentos.json');

const slugify = str =>
  str.toLowerCase()
     .normalize("NFD")
     .replace(/[\u0300-\u036f]/g, "")
     .replace(/\s+/g, "-")
     .trim();

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

router.get('/regiones/:region', (req, res) => {
  const regionParam = req.params.region;

  const departamentosFiltrados = departamentos.filter(dep =>
    slugify(dep.region) === regionParam
  );

  if (departamentosFiltrados.length === 0) {
    return res.status(404).json({ error: 'Región no encontrada ' });
  }

  res.json({
    region: departamentosFiltrados[0].region,
    cantidad: departamentosFiltrados.length,
    departamentos: departamentosFiltrados
  });
});

module.exports = router;
