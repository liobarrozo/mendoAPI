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

module.exports = router;
