'use strict';
function Thermostat() {
  this.temperature = 20
  this.minimumTemperature = 10
  this.maximumTemperaturePSMOn = 25
  this.maximumTemperaturePSMOff = 32
  this.powerSavingMode = true
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
}

Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.minimumTemperature;
};

Thermostat.prototype.isMaximumTemperature = function () {
  if (this.isPowerSavingModeOn() === true) {
    return this.temperature === this.maximumTemperaturePSMOn;
  };
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.maximumTemperaturePSMOff;
  };
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function () {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function () {
  this.powerSavingMode = true;
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
}

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18) {
    return 'low-usage'
  } else if (this.temperature < 25) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
}
