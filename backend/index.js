// backend/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg');

// Carrega variáveis do .env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configuração da conexão PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // necessário para Render.com
  },
});

// Rota de teste da API
app.get('/', (req, res) => {
  res.send('🚀 API do Unasys CRM funcionando!');
});

// Rota de teste da conexão com o banco de dados
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ status: 'Conectado com sucesso ao PostgreSQL!', time: result.rows[0].now });
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error);
    res.status(500).json({ error: 'Erro ao conectar ao banco de dados' });
  }
});

// Inicializa servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});

