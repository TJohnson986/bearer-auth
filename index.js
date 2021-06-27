'use strict';

// Start up DB Server
require('dotenv').config();
const { db } = require('./src/auth/models/index.js');
const PORT = process.env.PORT || 3001;


db.sync()
  .then(() => {

    // Start the web server
    require('./src/server.js').start(PORT);
  });