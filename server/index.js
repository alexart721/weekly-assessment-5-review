require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
const { PORT, HOST } = process.env;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`running @ http://${HOST}:${PORT}`);
});
