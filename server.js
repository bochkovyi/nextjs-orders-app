require('dotenv').config()
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const routes = require('./routes/index');
const initDb = require('./models').init;
const bodyParser = require('body-parser');

app.prepare().then(() => {
  const server = express()
  initDb()
  server.use(bodyParser.json());
  server.use('/', routes);

  server.get('/a', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  server.get('/test', (req, res) => {
	  console.log('yrdy')
    return res.json({test: true})
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
