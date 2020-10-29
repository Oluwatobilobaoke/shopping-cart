const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const logger = require('morgan');
const { key } = require('./Utils/libs/gen-key');

require('dotenv').config();
process.env.ZURI_TALENT_SESSION_COOKIEKEY = key(64);

// ************ Assign ROUTES HERE ********** //
const { indexRouter } = require('./app/home/route')
const { productRouter } = require('./app/Product/route');
const { cartRouter } = require('./app/Cart/routes')
const connectDatabase = require('./config/db');
const { errorHandler } = require('./Middleware/error-handler');
// ************ END ROUTE assignment ********** //

// Connect to database
connectDatabase();
const app = express();







app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/files', express.static("files"));

// ************ REGISTER ROUTES HERE ********** //
app.use('/v1', indexRouter)
app.use('/v1/product', productRouter);
app.use('/v1/cart', cartRouter);

// ************ END ROUTE REGISTRATION ********** //


// global error handler
app.use(errorHandler);

module.exports = app;

