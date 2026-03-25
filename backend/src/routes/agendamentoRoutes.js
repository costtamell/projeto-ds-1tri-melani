const express = require('express');
const router = express.Router();

const agendamentos = require('../models/agendamento');

router.get('/', (req, res) => {
  res.json(agendamentos);
});

router.post('/', (req, res) => {
  const agendamento = req.body;

  agendamentos.push(agendamento);

  res.json({ msg: "Agendado com sucesso" });
});

module.exports = router;