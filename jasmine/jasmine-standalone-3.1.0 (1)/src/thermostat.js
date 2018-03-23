function Thermostat(temperature = 20, minimum = 10, maximum = 25, powerSavingMode = true) {
  this.temperature = temperature
  this._DEFAULT_MINIMUM = minimum
  this.maximum = maximum
  this.powerSavingMode = powerSavingMode
}

Thermostat.prototype.up = function() {
  return this.temperature += 1
};

Thermostat.prototype.down = function() {
  return this.temperature -= 1
};

Thermostat.prototype.minimum = function() {
  return this._DEFAULT_MINIMUM
};

// Thermostat.prototype.maximum = function() {
//   if powerSavingMode = true
//     return this._DEFAULT_MAXIMUM
//   else
//     return this._DEFAULT_MAXIMUM + 7
// };
