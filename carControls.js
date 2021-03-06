const Motor = require("./Motor");

const motors = {   
  // other: Object.create(Motor).setPins(17, 6, 22), // 2
  front: Object.create(Motor).setPins(25, 13, 18), // 4
  steering: Object.create(Motor).setPins(12, 23, 16), // 3
  back: Object.create(Motor).setPins(5, 27, 24) // 1
};

function enable() {
  for (const key in motors) {
    motors[key].enable();
  }
}
enable();

module.exports = {
  forward: () => {
    console.log("forward");
    motors.front.forward();
    motors.back.forward();
  },
  backward: () => {
    console.log("backward");
    motors.front.backward();
    motors.back.backward();
  },
  stopMoving: () => {
    console.log("stop moving");
    motors.front.stop();
    motors.back.stop();
  },
  right: () => {
    console.log("right");
    motors.steering.forward();
  },
  left: () => {
    console.log("left");
    motors.steering.backward();
  },
  stopSteering: () => {
    console.log("stop steering");
    motors.steering.stop();
  },
}