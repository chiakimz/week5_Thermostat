describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
    powerSavingMode = true
  });

  describe('Thermostat', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20)
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

    // it('has a maximum temperature', function() {
    //   expect(thermostat.maximum()).toEqual(25)
    // });
    //
    // it('changes a maximum temperature', function() {
    //   powerSavingMode = false
    //   expect(thermostat.maximum()).toEqual(32)
    // });
  });
});
