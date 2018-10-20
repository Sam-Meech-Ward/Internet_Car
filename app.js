const server = require('./server');
let carControls = process.env.DEVELOPMENT ? require('./devCarControls') : require('./carControls');

server(carControls);