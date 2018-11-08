const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

// config middleware, extends functionality
// ORDER MATTERS

module.exports = server => {
    server.use(express.json());
    server.use(helmet());
    server.use(morgan('dev'));
}