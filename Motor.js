// const onoff = require('onoff');
// const Gpio = onoff.Gpio;

class Gpio {
  write(value, cb) {
    console.log("write", value);
    cb();
  }
}

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
    this.enablePin = gpioPin(enable, 'out');
    this.positivePin = gpioPin(positive, 'out');
    this.negativePin = gpioPin(negative, 'out');
    return this;
  },
  enable() {
    return gpioWrite(this.enablePin, 1.0);
  },
  disable() {
    return gpioWrite(this.enablePin, 0.0);
  },
  forwards() {
    return Promise.all([
      gpioWrite(this.positivePin, 1.0),
      gpioWrite(this.negativePin, 0.0)
    ]);
  },
  backwards() {
    return Promise.all([
      gpioWrite(this.positivePin, 0.0),
      gpioWrite(this.negativePin, 1.0)
    ]);
  },
  stop() {
    return Promise.all([
      gpioWrite(this.positivePin, 0.0),
      gpioWrite(this.negativePin, 0.0)
    ]);
  }

};

module.exports = Motor;