const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');

const router = express.Router();

const saltRounds = 10;

router.get('/sign-up', async (req, res) => {
  const { email, password } = req.body;

  const account = await Account.findOne({where: {email}});
  if(account) return res.jsonBadRequest(null, 'Account already exists!');

  const newAccount = await Account.create({
    email: email, 
    password: bcrypt.hashSync(password, saltRounds)
  });
  return res.jsonOK(newAccount);
});

router.get('/sign-in', (req, res) => {
  return res.jsonOK('Sign in!');
});

module.exports = router;