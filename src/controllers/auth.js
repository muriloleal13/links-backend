const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');
const { accountSignUp } = require('../validators/account')
const { getMessage } = require('../helpers/messages');

const router = express.Router();

const saltRounds = 10;

router.get('/sign-up', accountSignUp, async (req, res) => {
  const { email, password } = req.body;

  const account = await Account.findOne({where: {email}});
  if(account) return res.jsonBadRequest(null, getMessage('account.signup.email_exists'));

  const newAccount = await Account.create({
    email: email, 
    password: bcrypt.hashSync(password, saltRounds)
  });
  return res.jsonOK(newAccount, getMessage('account.signup.success'));
});

router.get('/sign-in', (req, res) => {
  return res.jsonOK(null);
});

module.exports = router;