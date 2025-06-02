
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

app.post('/login', (req, res) => {
  const { user, pass } = req.body;
  if (user === 'admin' && pass === '123') {
    const token = jwt.sign({ user }, 'secret', { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(401).send('Unauthorized');
});

app.listen(3001, () => console.log('Backend rodando na porta 3001'));
