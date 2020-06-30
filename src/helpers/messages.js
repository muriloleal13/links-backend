const messages = require('../config/messages');

const getMessage = (path) => {
  return messages[path] || null;
};

module.exports = { getMessage };