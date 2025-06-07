// backend/routes/login.js
const express = require("express");
const router = express.Router();

// Simulação de banco de dados de usuários
const usuarios = [
  {
    id: 1,
    nome: "Admin",
    email: "admin@unasys.com",
    senha: "123456", // Em produção, sempre use senhas criptografadas
    permissoes: [
      "clientes_ver",
      "clientes_criar",
      "propostas_criar",
      "gatilho_gerenciar",
      "financeiro_ver"
    ]
  }
];

// POST /api/login
router.post("/", (req, res) => {
  const { email, senha } = req.body;

  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (!usuario) {
    return res.status(401).json({ erro: "Credenciais inválidas" });
  }

  // Evita enviar a senha no retorno
  const { senha: _, ...usuarioSemSenha } = usuario;

  res.json(usuarioSemSenha);
});

module.exports = router;
