require('dotenv').config()
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const orders = require('./server-routes/orders');
const payments = require('./server-routes/payments');
const initDb = require('./models').init;
const models  = require('./models').db;
const bodyParser = require('body-parser');

app.prepare().then(() => {
  process.app = app;
  const server = express()
  initDb()
  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json());
  server.use('/orders', orders);
  server.use('/payments', payments);

  server.use(errorHandler);
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

function errorHandler(err, req, res, next) {
  res.status(500);
  res.json({error: err.message || true});
}
