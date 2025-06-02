// backend/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Carrega variáveis do .env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('🚀 API do Unasys CRM funcionando!');
});

// Inicializa servidor na porta definida
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
