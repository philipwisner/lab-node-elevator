class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "UP";
    this.timerId;
    this.waitingList = []; //made request but not on yet
    this.passengers = []; //currently in elevator
  }

  start() {
    this.timer = setInterval(() => { this.update() }, 1000);

  stop() {
    clearInterval(this.timer);;
  }

  update() {
    this.log();
  }

  _passengersEnter() {
    this.waitingList.forEach((person, index) => {
      if (this.waitingList[i] = this.floor) {
        this.passengers.push(this.waitingList[i]);
        this.waitingList.splice(this.waitingList[i], 1);
        requests.push(Person.destinationFloor);
        return console.log(`${Person.name} has entered the elevator`);
      };
    })
  }

  _passengersLeave() {
    this.passengers.forEach((passengers, index) => {
      if (this.passengers[i].destinationFloor = this.floor) {
        this.passengers.splice(this.passengers[i], 1);
        return console.log(`${Person.name} has left the elevator`);
      };
    })
  }

  floorUp() {
    while (this.floor < this.MAXFLOOR) {
      this.floor += 1;
    }
    this.direction = "UP";
  }

  floorDown() {
    while (this.floor > 0) {
      this.floor -= 1;
    }
    this.direction = "DOWN";
  }

  call() {
    let newPerson = new Person();
    this.requests.push(newPerson.originFloor);
    this.waitingList.push(newPerson);
    //ADD WHOLE person object and add it as a request to the elevators queue - request array
  }

  log() {
    console.log("Direction: " + this.direction + "| Floor: " + this.floor);
  }
}

module.exports = Elevator;
