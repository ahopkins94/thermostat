require 'pg'

class Thermostat

  def initialize(temperature:)
    @temperature = temperature
  end

  def self.temperature
    con = PG.connect(dbname: 'thermostat_manager')
    con.exec("SELECT temperature FROM thermostat_temperature WHERE id = 1;")
  end

  def self.save_thermostat_temperature(new_temperature)
    con = PG.connect(dbname: 'thermostat_manager')
    con.exec("UPDATE thermostat_temperature set temperature = '#{new_temperature}' where id = 1;")
  end

end
