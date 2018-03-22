function Thermostat(temperature = 20, minimum = 10) {
  this._DEFAULT_TEMPERATURE = temperature
  this._DEFAULT_MINIMUM = minimum
}

Thermostat.prototype.start = function() {
  return this._DEFAULT_TEMPERATURE
};

Thermostat.prototype.up = function() {
  return this._DEFAULT_TEMPERATURE + 1
};

Thermostat.prototype.down = function() {
  return this._DEFAULT_TEMPERATURE - 1
};

Thermostat.prototype.minimum = function() {
  return this._DEFAULT_MINIMUM
};
