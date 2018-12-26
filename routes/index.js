const models  = require('../models').db;
const express = require('express');
const router  = express.Router();
const users  = require('./users');

router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.json({'index': {
      title: 'Sequelize: Express Example',
      users: users
    }});
  });
});

router.use('/users', users)

module.exports = router;
