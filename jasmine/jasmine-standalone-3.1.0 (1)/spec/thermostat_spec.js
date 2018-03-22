describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat
  });

  describe('Thermostat', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.start()).toEqual(20)
    });

    it('increases temperature', function() {
      expect(thermostat.up()).toEqual(21)
    });

    it('decreases temperature', function() {
      expect(thermostat.down()).toEqual(19)
    });

    it('has a minimum temperature', function() {
      expect(thermostat.minimum()).toEqual(10)
    });
  });
});
