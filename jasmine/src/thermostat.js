function Thermostat() {
  this.temperature = 20;
  this.powerSaving = false;

  this.up = function (increment) {
      if(this.isPowerSaving() && this.temperature + increment > 32){
        return false;
      } else if(this.temperature + increment > 25){
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

  this.isPowerSaving = function() {
      return this.powerSaving;
  };
}
