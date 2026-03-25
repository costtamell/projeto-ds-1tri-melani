const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const medicoRoutes = require('./medicoRoutes');
const agendamentoRoutes = require('./agendamentoRoutes');

router.use('/auth', authRoutes);
router.use('/medicos', medicoRoutes);
router.use('/agendamentos', agendamentoRoutes);

module.exports = router;