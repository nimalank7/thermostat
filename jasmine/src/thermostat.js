function Thermostat() {
  this.temperature = 20;
  this.isPowerSaving = false;
  this.up = function (increment) {
    if(this.temperature + increment > 25){
        return false;
      }
      this.temperature += increment;
  };
  this.down = function (decrement) {
      if(this.temperature - decrement < 10){
        return false;
      }
      this.temperature -= decrement;
  };
}
