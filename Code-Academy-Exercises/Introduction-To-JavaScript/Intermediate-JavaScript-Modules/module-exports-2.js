// 2-missionControl.js
const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());

// 2-airplane.js
let Airplane = { } ;
module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};


// I just learned how to use the module exports with the require
