const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');

// Route files
const auth = require('./routes/auth.routes');
const properties = require('./routes/property.routes');

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/properties', properties);

// Error handler middleware
app.use(errorHandler);

module.exports = app;