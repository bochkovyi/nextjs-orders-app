const models  = require('../models').db;
const express = require('express');
const router  = express.Router();

router.get('/1', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.json({'index': {
      title: 'Sequelize: Express Example',
      users: users
    }});
  });
});

router.post('/create', function(req, res) {
  console.log(req.body)
  res.json({test: true})
});

module.exports = router;
