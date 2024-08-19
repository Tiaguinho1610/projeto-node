const express = require('express');

const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) =>{
    const filePath = path.join(__dirname, '..','public','index.html');
    res.sendFile(filePath);
});
const PORT = 8080;
const IP = "192.168.0.139";

app.listen(PORT, IP, () => {
    console.log(`Servidor rodando em http://${IP}:${PORT}`);
  });