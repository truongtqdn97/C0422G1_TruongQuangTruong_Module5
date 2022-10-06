import {BusType} from "./bus-type";

export interface Agency {
  id?: number;
  busNumber?: string;
  name?: string;
  phone?: string;
  email?: string;
  busType?: BusType;
}
