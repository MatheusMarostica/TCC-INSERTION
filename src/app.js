const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routes/taskRouter')
const feedrouter = require('./routes/feedRouter')
const app = express();

app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use('/api', feedrouter);

module.exports = app;