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
    it('sets power saving mode off for false', function() {
      expect(thermostat.isPowerSaving).toEqual(false);
    });
    it('doesnt increment past 25 if power saving mode is on', function() {
      thermostat.isPowerSaving = true;
      expect(thermostat.up(6)).toEqual(false);
    });
  });
});
