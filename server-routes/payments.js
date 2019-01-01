const models  = require('../models').db;
const express = require('express');
const router  = express.Router();
const catchAsyncErrors = require('../utils/catchAsyncErrors');

router.get('/', catchAsyncErrors((req, res) => {
  return models.payment.findAll({include: {model: models.order}}).then(payments => {
    return process.app.render(req, res, '/payments', { payments })
  })
}));

router.post('/pay', catchAsyncErrors(async function(req, res) {
  const random = Math.floor(Math.random()*100);
  const payment = await models.payment.create({
    method: random % 2 !== 0 ? 'card' : 'transfer',
    meta: "Slug / order name: " + req.body.meta,
    success: random % 2 !== 0,
    order_id: req.body.order_id
  })
  return res.json({status: payment.success ? 'confirmed' : 'declined'});
}));

module.exports = router;
