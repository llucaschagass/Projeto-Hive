import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Bem vindos a Hive API!');
});

const port = 4200;

app.listen(port, () => {
  console.log(`Hive API rodando na porta ${port}`);
});
