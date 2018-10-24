module.exports = ({forward, backward, stopMoving, left, right, stopSteering}) => {

  const WebSocket = require('ws');
  
  const ws = new WebSocket('https://internet-car.herokuapp.com/');
  
  ws.on('open', function open() {
    ws.send({user: "pi"});
  });
  
  ws.on('message', function incoming(data) {
    switch(data) {
      case "forward":
        forward();
      break;
      case "backward":
        backward();
      break;
      case "stop_moving":
        stopMoving();
      break;
      case "left":
        left();
      break;
      case "right":
        right();
      break;
      case "stop_steering":
        stopSteering();
      break;
    }
  });
}