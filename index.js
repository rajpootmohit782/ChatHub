const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const path = require('path');

app.use(cors({ origin: true }));

app.post('/auth', async (req, res) => {
  console.log('hit');
  return res.json({ username: 'username', secret: 'sha256..' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
