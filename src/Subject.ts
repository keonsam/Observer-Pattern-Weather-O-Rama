import { Observer } from "./Observer";

export interface Subject {
  register(o: Observer): void;
  remove(o: Observer): void;
  notify(): void;
}