function Thermostat(temperature = 20, minimum = 10, maximum = 25, maximum_pws = 32, powerSavingMode = true) {
  this.temperature = temperature
  this.minimum = minimum
  this.maximum = maximum
  this.maximum_pws = maximum_pws
  this.powerSavingMode = powerSavingMode
}

Thermostat.prototype.up = function() {
  if (this.powerSavingMode = true) {
    if (this.temperature + 1 > this.maximum) {
      throw new Error('You reached the maximum');
    } else {
      return this.temperature += 1;
    }
  } else {
    if (this.temperature + 1 > this.maximum_pws) {
      throw new Error('You reached the maximum');
    } else {
      return this.temperature += 1;
    }
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature - 1 < this.minimum) {
    throw new Error('You reached the minimum');
  } else {
    return this.temperature -= 1;
  }
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.maximum = maximum
  this.powerSavingMode = true
};

Thermostat.prototype.powerSavingModeOff = function() {
  this.maximum = this.maximum_pws
  this.powerSavingMode = false
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.currentEnergyUsage = function() {
  if (this.temperature < 18) {
    return 'low-usage';
  } else if (this.temperature > 25) {
    return 'high-usage';
  } else {
    return 'medium-usage';
  }
};
