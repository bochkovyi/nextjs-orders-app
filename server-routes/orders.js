const models  = require('../models').db;
const express = require('express');
const router  = express.Router();
const catchAsyncErrors = require('../utils/catchAsyncErrors');

router.get('/', catchAsyncErrors((req, res) => {
  return models.order.findAll().then(orders => {
    return process.app.render(req, res, '/orders', { orders })
  })
}));

router.post('/create', catchAsyncErrors(async function(req, res) {
  const order = await models.order.create({
    name: req.body.orderName,
    status: 'created',
    amount_cents: req.body.orderAmount * 100,
  })
  return res.redirect('/orders');
}));

router.post('/cancel/:id', catchAsyncErrors(async function(req, res) {
  const order = await models.order.findByPk(req.params.id)
  const updatedOrder = await order.update({status: 'cancelled'})
  return res.json(updatedOrder);
}));

router.post('/check/:id', catchAsyncErrors(async function(req, res) {
  const order = await models.order.findByPk(req.params.id)
  return res.json({status: order.status});
}));

module.exports = router;
