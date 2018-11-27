function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;

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

  this.reset = function() {
      this.temperature = 20;
  };

  this.usage = function() {
      if(this.temperature < 18){
        return "low-usage";
      } else if(this.temperature < 25) {
        return "medium-usage";
      }
      return "high-usage";
  };
}
