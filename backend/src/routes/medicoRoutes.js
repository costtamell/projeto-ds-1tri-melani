const express = require('express');
const router = express.Router();

const medicos = require('../models/medico');

router.get('/', (req, res) => {
  res.json(medicos);
});

module.exports = router;