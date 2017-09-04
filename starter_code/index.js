const Elevator = require('./elevator.js', './person.js');


var newElevator = new Elevator();

newElevator.floorUp();

console.log(newElevator.log());
