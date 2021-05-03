const express = require('express');
const cors = require('cors');
const app = express();

const port = 8080;

app.use(cors());
app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  })
});

app.listen(port, () => console.log('API is running on http://localhost:8080/login'));