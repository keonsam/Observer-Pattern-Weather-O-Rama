import { DisplayElement } from "./DisplayElement";
import { Observer } from "./Observer";
import { Subject } from "./Subject";
import { WeatherData } from "./WeatherData";

export class Forecast implements Observer, DisplayElement {
  id = "forecast display";
  private subject: Subject;
  private pressure: number | undefined;

  constructor(s: Subject) {
    this.subject = s;
    s.register(this);
  }

  update(s: Subject): void {
    if (s instanceof WeatherData) {
      this.pressure = s.getPressure();
      this.display();
    }
  }

  display(): void {
    if (!this.pressure) {
      console.log("Forecast: unknown");
      return;
    }
    const f =
      this.pressure > 30 ? "Weather improving" : "cooler, rainy weather";
    console.log("Forecast: " + f);
  }
}
