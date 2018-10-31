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

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  }

})
