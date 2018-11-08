// custom middleware
function gatekeeper(req, res, next) {
    // next 
    if (req.query.pass === 'melon' ) {
        console.log('Welcome travelers');
        req.welcomeMessage= 'Welcome to Mines of Moria';
        next();
    }
    else {
        res.send('you shall not pass');
    }
}

server.use(gatekeeper);