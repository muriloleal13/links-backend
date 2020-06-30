const express = require('express');

const router = express.Router();

router.get('/sign-up', (req, res) => {
  return res.json('Sign up!');
});

router.get('/sign-in', (req, res) => {
  return res.json('Sign in!');
});

module.exports = router;