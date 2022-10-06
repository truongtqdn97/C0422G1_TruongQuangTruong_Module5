import {BusType} from "./bus-type";

export interface Bus {
  id?: number;
  busNumber?: string;
  name?: string;
  go?: string;
  arrival?: string;
  phone?: string;
  email?: string;
  hourGo?: string;
  hourArrival?: string;
  busType?: BusType;
}
