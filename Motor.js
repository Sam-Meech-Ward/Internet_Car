const onoff = require('onoff');
const Gpio = onoff.Gpio;

function gpioPin(pinNumber, direction) {
  return new Gpio(pinNumber, direction);
}

function gpioWrite(pin, value) {
  return new Promise((resolve, reject) => {
    pin.write(value, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve("🤗");
    })
  });
}

const Motor = {
  setPins(enable, positive, negative) {
    this.enable = gpioPin(enable, 'out');
    this.positive = gpioPin(positive, 'out');
    this.negative = gpioPin(negative, 'out');
    return this;
  },
  enable() {
    return gpioWrite(this.enable, 1.0);
  },
  disable() {
    return gpioWrite(this.enable, 0.0);
  },
  forwards() {
    return Promise.all([
      gpioWrite(this.positive, 1.0),
      gpioWrite(this.negative, 0.0)
    ]);
  },
  backwards() {
    return Promise.all([
      gpioWrite(this.positive, 0.0),
      gpioWrite(this.negative, 1.0)
    ]);
  },
  stop() {
    return Promise.all([
      gpioWrite(this.positive, 0.0),
      gpioWrite(this.negative, 0.0)
    ]);
  }

};

module.exports = Motor;