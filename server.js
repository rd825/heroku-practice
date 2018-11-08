// module.exports = {
//     listen: (port, callback) => {
//         console.log('ran the server');
//         callback();
//     }
// }

const express = require('express');
const server = express();

const configureMiddleware = require('./config/middleware');

const productRouter = require('./products/ProductRouter');

// middleware moved to middleware.js
configureMiddleware(server);

server.get('/', (req, res) => {
    res.status(200).json({api: 'running'});
})

// server.get('/secret', gatekeeper, (req,res) => {
//     res.send(req.welcomeMessage);
// })

server.use('/products', productRouter);

module.exports = server;