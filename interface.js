$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
      thermostat.up();
      updateTemperature();
  })

  $('#temperature-down').click(function () {
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').click(function () {
    thermostat.reset();
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
  })

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  }

})
