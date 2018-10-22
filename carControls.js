const Motor = require("./Motor");

const motors = {   
  steering2: Object.create(Motor).setPins(17, 6, 22), // 2
  front: Object.create(Motor).setPins(25, 13, 18), // 4
  back: Object.create(Motor).setPins(12, 23, 16), // 3
  steering: Object.create(Motor).setPins(5, 27, 24) // 1
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
    motors.steering2.forward();
  },
  left: () => {
    console.log("left");
    motors.steering.backward();
    motors.steering2.backward();
  },
  stopSteering: () => {
    console.log("stop steering");
    motors.steering.stop();
    motors.steering2.stop();
  },
}