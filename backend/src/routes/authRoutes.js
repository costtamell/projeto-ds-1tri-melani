const express = require('express');
const router = express.Router();

const users = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = "segredo";

router.post('/register', async (req, res) => {
  const { email, senha } = req.body;

  const hash = await bcrypt.hash(senha, 8);

  users.push({ email, senha: hash });

  res.json({ msg: "Usuário criado" });
});

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  const user = users.find(u => u.email === email);

  if (!user) return res.status(400).json({ erro: "Usuário não encontrado" });

  const valid = await bcrypt.compare(senha, user.senha);

  if (!valid) return res.status(401).json({ erro: "Senha inválida" });

  const token = jwt.sign({ email }, SECRET);

  res.json({ token });
});

module.exports = router;