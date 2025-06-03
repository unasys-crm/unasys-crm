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

// Conexão com PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Rota de teste
app.get('/', (req, res) => {
  res.send('🚀 API do Unasys CRM funcionando!');
});

// Rota para salvar modelos de mensagens
app.post('/modelos-mensagens', async (req, res) => {
  const { grupo, status, mensagem } = req.body;

  try {
    await pool.query(
      'INSERT INTO modelos_mensagens (grupo, status, mensagem) VALUES ($1, $2, $3)',
      [grupo, status, mensagem]
    );
    res.status(201).json({ sucesso: true, mensagem: 'Modelo salvo com sucesso' });
  } catch (error) {
    console.error('Erro ao salvar modelo:', error);
    res.status(500).json({ sucesso: false, erro: 'Erro ao salvar modelo' });
  }
});

// Inicializa servidor na porta definida
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});

// Rota para listar todos os modelos de mensagens
app.get('/modelos-mensagens', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM modelos_mensagens ORDER BY id DESC');
    res.status(200).json(resultado.rows);
  } catch (error) {
    console.error('Erro ao buscar modelos:', error);
    res.status(500).json({ sucesso: false, erro: 'Erro ao buscar modelos' });
  }
});


