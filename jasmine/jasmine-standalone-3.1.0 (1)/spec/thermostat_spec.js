describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
    powerSavingMode = true
  });

  describe('Basic functions', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20)
    });

    it('has a minimum temperature', function() {
      expect(thermostat.minimum).toEqual(10)
    });
  });

  describe('#down', function() {
    it('decreases temperature', function() {
      expect(thermostat.down()).toEqual(19)
    });

    it('raises an error when you hit minimum', function() {
      thermostat.temperature = 10
      expect(function(){thermostat.down();}).toThrowError('You reached the minimum');
    });
  });

  describe('#up', function() {
    it('increases temperature', function() {
      expect(thermostat.up()).toEqual(21)
    });

    it('raises an error when you hit maximum', function() {
      thermostat.temperature = 25
      thermostat.powerSavingModeOn
      expect(function(){thermostat.up();}).toThrowError('You reached the maximum');
    });

    it('raises an error when you hit maximum with power saving mode on', function() {
      thermostat.temperature = 32
      thermostat.powerSavingModeOff
      expect(function(){thermostat.up();}).toThrowError('You reached the maximum');
    });
  });

  describe('#powerSavingModeOn', function() {
    it('sets a maximum temperature', function() {
      expect(thermostat.maximum).toEqual(25)
    });

    it('returns true for powerSavingMode', function() {
      expect(thermostat.powerSavingMode).toBe(true)
    });
  });

  describe('#powerSavingModeOff', function() {
    it('changes a maximum temperature', function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.maximum).toEqual(32)
    });

    it('returns false for powerSavingMode', function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.powerSavingMode).toBe(false)
    });
  });

  describe('#reset', function() {
    it('brings temperature back to default', function() {
      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe('#currentEnergyUsage', function() {
    it('returns "low usage" when < 18', function() {
      thermostat.temperature = 16
      expect(thermostat.currentEnergyUsage()).toEqual('low-usage')
    });

    it('returns "medium usage" when < 25', function() {
      thermostat.temperature = 23
      expect(thermostat.currentEnergyUsage()).toEqual('medium-usage')
    });

    it('returns "high usage" when > 25', function() {
      thermostat.temperature = 28
      expect(thermostat.currentEnergyUsage()).toEqual('high-usage')
    });
  });
});
