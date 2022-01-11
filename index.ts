import { CurrentConditions } from "./src/CurrentConditions";
import { Forecast } from "./src/Forecast";
import { Statistics } from "./src/Statistics";
import { WeatherData } from "./src/WeatherData";

class WeatherStation {
  main() {
    const weatherData = new WeatherData();
    weatherData.setMeasurements(80, 65, 30.4);
    const currentConditions = new CurrentConditions(weatherData);
    const statistics = new Statistics(weatherData);
    const forecast = new Forecast(weatherData);
    weatherData.setMeasurements(82, 70, 29.2);
    weatherData.setMeasurements(78, 90, 29.2);
    weatherData.remove(forecast);
    weatherData.setMeasurements(71, 65, 35);
  }
}

const weatherStation = new WeatherStation();
weatherStation.main();
