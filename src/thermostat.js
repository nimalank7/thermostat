'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.DEFAULT_TEMPERATURE = 20;
  this.MAX_TEMPATURE_POWER_ON = 25;
  this.MAX_TEMPATURE_POWER_OFF = 32;
  this.LOW_USAGE_TEMP = 18;
  this.MEDIUM_USAGE_TEMP = 25;

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
      this.temperature = this.DEFAULT_TEMPERATURE;
  };

  this.usage = function() {
      if(this.temperature < this.LOW_USAGE_TEMP){
        return "low-usage";
      } else if(this.temperature < this.MEDIUM_USAGE_TEMP) {
        return "medium-usage";
      }
      return "high-usage";
  };
}
