module.exports = ({forward, backward, stopMoving, left, right, stopSteering}) => {
  const express = require('express');

  const app = express();

  app.use(express.static('public'));

  app.post("/forward", (req, res) => {
    forward();
    res.send("🤗");
  });

  app.post("/backward", (req, res) => {
    backward();
    res.send("🤗");
  });

  app.post("/stop_moving", (req, res) => {
    stopMoving();
    res.send("🤗");
  });

  app.post("/left", (req, res) => {
    left();
    res.send("🤗");
  });

  app.post("/right", (req, res) => {
    right();
    res.send("🤗");
  });

  app.post("/stop_steering", (req, res) => {
    stopSteering();
    res.send("🤗");
  });

  app.listen(3333, () => console.log("😎"));
};