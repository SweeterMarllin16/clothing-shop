require('dotenv').config();
module.exports = {
  PORT: process.env.PORT || 3000,
  EMAIL_TO: process.env.EMAIL_TO || 'store@example.com',
};