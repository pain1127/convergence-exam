'use strict';

const dotenv = require('dotenv');
dotenv.config();

const config = {
  env: process.env.NODE_ENV,
  port: process.env.USE_PORT,
  server: {
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  },
};

module.exports = config;
