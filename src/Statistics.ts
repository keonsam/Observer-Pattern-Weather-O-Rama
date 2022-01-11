import { DisplayElement } from "./DisplayElement";
import { Observer } from "./Observer";
import { Subject } from "./Subject";
import { WeatherData } from "./WeatherData";

export class Statistics implements Observer, DisplayElement {
  id = "statistics display";
  private subject: Subject;
  private temperature: number[] = [];

  constructor(s: Subject) {
    this.subject = s;
    s.register(this);
  }

  update(s: Subject): void {
    if (s instanceof WeatherData) {
      const temperature = s.getTemperature();
      if (temperature) {
        this.temperature.push(temperature);
      }
      this.display();
    }
  }

  display(): void {
    const avg = this.temperature.reduce((a, b) => a + b) / this.temperature.length;
    const max = Math.max(...this.temperature);
    const min = Math.min(...this.temperature);
    console.log(`Statistics Avg/Max/Min temperature = ${avg}/${max}/${min}`);
  }
}
