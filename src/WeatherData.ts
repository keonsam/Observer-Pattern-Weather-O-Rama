import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;

  constructor() {}

  register(o: Observer): void {
    this.observers.push(o);
    o.update(this);
  }

  remove(o: Observer): void {
    this.observers = this.observers.filter(v => v.id !== o.id);
  }

  notify(): void {
    this.observers.forEach(v => v.update(this));
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notify();
  }

  getTemperature() {
    return this.temperature;
  }

  getHumidity() {
    return this.humidity;
  }

  getPressure() {
    return this.pressure;
  }
}