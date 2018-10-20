const server = require('./server');

const carControls = {
  forward: () => {
    console.log("forward");
  },
  backward: () => {
    console.log("backward");
  },
  stop: () => {
    console.log("stop");
  },
  right: () => {
    console.log("right");
  },
  left: () => {
    console.log("left");
  }
}

server(carControls);