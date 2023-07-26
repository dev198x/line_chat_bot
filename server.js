const express = require('express')
const path = require('path');
require('dotenv').config();
// const os = require('os');
const app = express()
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const port = 3000

// console.log(process.env.CHANNEL_TOKEN);
// console.log(process.cpuUsage());
// console.log(os.cpus())

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.post('/webhooks/line', (req, res) => {
    console.log(req.query, req.params);
    console.log('req.body', JSON.stringify(req.body))
    console.log('comming into our server');
    res.send('ok babe');
})

app.get('/webapp', (req, res) => {
    const filePath = path.resolve('./public/webapp.html');
    console.log(filePath);
    res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})