import { DisplayElement } from "./DisplayElement";
import { Observer } from "./Observer";
import { Subject } from "./Subject";
import { WeatherData } from "./WeatherData";

export class CurrentConditions implements Observer, DisplayElement {
  id = "current conditions display";
  private subject: Subject;
  private temperature: number | undefined;
  private humidity: number | undefined;

  constructor(s: Subject) {
    this.subject = s;
    s.register(this);
  }

  update(s: Subject): void {
    if (s instanceof WeatherData) {
      this.temperature = s.getTemperature();
      this.humidity = s.getHumidity();
      this.display();
    }
  }

  display(): void {
    console.log(
      "Current Conditions: " + this.temperature,
      "F degrees and " + this.humidity + "% humidity."
    );
  }
}
