module.exports = ({forward, backward, stop, left, right}) => {
  const express = require('express');

  const app = express();

  app.use(express.static('public'));

  app.post("/forward", (req, res) => {
    forward();
  });

  app.post("/backward", (req, res) => {
    backward();
  });

  app.post("/stop", (req, res) => {
    stop();
  });

  app.post("/left", (req, res) => {
    left();
  });

  app.post("/right", (req, res) => {
    right();
  });

  app.listen(3333, () => console.log("😎"));
};