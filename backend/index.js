const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 API do Unasys CRM funcionando!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});

const { Pool } = require('pg');

// Configuração do banco (use as variáveis do seu .env ou insira os dados diretamente)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // ou use user, password, host, port, database
  ssl: { rejectUnauthorized: false } // se estiver no Render ou outro serviço que exige SSL
});

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ status: 'Conectado com sucesso ao PostgreSQL', time: result.rows[0].now });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    res.status(500).json({ error: 'Erro ao conectar ao banco de dados' });
  }
});
