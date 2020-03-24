const express = require('express');

const routes = express.Router();

routes.post('/usres', (req, res) => {
  const body = req.body;

  console.log(body);

  return res.json({
    event: 'Semana Omnistack 11',
    aluno: 'Guilherme Henrique'
  });
});

module.exports = routes;