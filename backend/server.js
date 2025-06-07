// backend/server.js
const express = require("express");
const cors = require("cors");
const loginRoutes = require("./routes/login");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/login", loginRoutes);

// Exemplo de rota protegida (gatilhos, clientes, etc.)
app.get("/api/gatilhos", (req, res) => {
  res.json([{ evento: "proposta_aprovada", acao: "enviar_mensagem", mensagem: "Obrigado!" }]);
});

app.listen(3001, () => {
  console.log("API rodando em http://localhost:3001");
});
