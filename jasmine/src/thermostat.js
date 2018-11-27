'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_TEMPATURE_POWER_ON = 32;
  this.MAX_TEMPATURE_POWER_OFF = 25;

  this.up = function (increment) {
      if(this.isPowerSaving() && this.temperature + increment > this.MAX_TEMPATURE_POWER_ON){
        return false;
      } else if(this.temperature + increment > this.MAX_TEMPATURE_POWER_OFF){
        return false;
      }
      this.temperature += increment;
  };

  this.down = function (decrement) {
      if(this.temperature - decrement < this.MINIMUM_TEMPERATURE){
        return false;
      }
      this.temperature -= decrement;
  };

  this.isPowerSaving = function() {
      return this.powerSaving;
  };

  this.switchesPowerSaving = function() {
    this.powerSaving = !this.powerSaving;
  }

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
