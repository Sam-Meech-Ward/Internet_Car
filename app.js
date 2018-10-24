const socketClient = require('./socketClient');
let carControls = process.env.DEVELOPMENT ? require('./devCarControls') : require('./carControls');

socketClient(carControls);