const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');

const router = express.Router();

const saltRounds = 10;

router.get('/sign-up', async (req, res) => {
  const email = 'mukaleal@gmail.com';
  const password = '123456';
  const result = await Account.create({
    email: email, 
    password: bcrypt.hashSync(password, saltRounds)
  });
  return res.json(result);
});

router.get('/sign-in', (req, res) => {
  return res.json('Sign in!');
});

module.exports = router;