require 'sinatra'
require_relative 'thermostat'

class ThermostatApp <  Sinatra::Base

get '/' do
  Thermostat.temperature
end

post '/' do
  Thermostat.save_thermostat_temperature(params[:temperature])
end

run! if app_file == $0

end
