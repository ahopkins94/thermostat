$(document).ready(function() {
  var thermostat = new Thermostat();

  function savedThermostatTemperature() {
    var temperature = thermostat.temperature
    $.get('http://localhost:4567/', function(data) {
      $('#temperature').text(data);
    })
  }

  $('#temperature-up').click(function() {
      thermostat.up();
      updateTemperature();
      saveThermostatTemperature();
  })

  $('#temperature-down').click(function () {
    thermostat.down();
    updateTemperature();
    saveThermostatTemperature();
  })

  $('#temperature-reset').click(function () {
    thermostat.reset();
    updateTemperature();
    saveThermostatTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  })

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  $('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=70f3375472097d99b0d831e5c9a7f4fa&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })
})

function saveThermostatTemperature() {
  var temperature = thermostat.temperature
  $.post('http://localhost:4567/?temperature='+temperature)
}

})
