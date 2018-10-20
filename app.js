const server = require('./server');

const carControls = {
  forward: () => {
    console.log("forward");
  },
  backward: () => {
    console.log("backward");
  },
  stopMoving: () => {
    console.log("stop moving");
  },
  right: () => {
    console.log("right");
  },
  left: () => {
    console.log("left");
  },
  stopSteering: () => {
    console.log("stop steering");
  },
}

server(carControls);