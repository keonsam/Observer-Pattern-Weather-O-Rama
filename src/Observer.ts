import { Subject } from "./Subject";

export interface Observer {
  id: string;
  update(s: Subject): void;
}