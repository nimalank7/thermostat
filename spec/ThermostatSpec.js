'use strict';

describe ("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('sets up a thermostat object', function (){
    it('initializes temperature to 20', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('increases the temperature by user given value', function() {
      thermostat.up(5);
      expect(thermostat.temperature).toEqual(25);
    });

    it('decreases the temperature by user given value', function() {
      thermostat.down(10);
      expect(thermostat.temperature).toEqual(10);
    });

    it('returns false when attempting to decrement by 10', function() {
      expect(thermostat.down(11)).toEqual(false);
    });

    it('temperature remains at 20 when decrementing more than minimum value', function() {
      thermostat.down(11);
      expect(thermostat.temperature).toEqual(20);
    });

    it('sets power saving mode on by default', function() {
      expect(thermostat.powerSaving).toEqual(true);
    });

    it('doesnt increment past 25 if power saving mode is on', function() {
      expect(thermostat.up(6)).toEqual(false);
    });

    it('doesnt increment past 32 if powersaving mode is off', function(){
      thermostat.switchesPowerSaving(); // Turns it off
      expect(thermostat.up(13)).toEqual(false);
    });

    it('isPowerSaving method returns true if power saving mode is off', function(){
      thermostat.switchesPowerSaving(); // Turns it off
      expect(thermostat.isPowerSaving()).toEqual(false);
    });

    it('isPowerSaving method returns false if power saving mode is on', function(){
      expect(thermostat.isPowerSaving()).toEqual(true);
    });

    it('resets temperature to 20', function(){
      thermostat.up(5)
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });

    it('usage function returns low-usage if temp less than 18', function(){
      thermostat.down(3)
      expect(thermostat.usage()).toEqual("low-usage");
    });

    it('usage function returns medium-usage if temp less than 25', function(){
      expect(thermostat.usage()).toEqual("medium-usage");
    });
    
    it('usage function returns high-usage if temp >= 25', function(){
      thermostat.up(5)
      expect(thermostat.usage()).toEqual("high-usage");
    });
  });
});
