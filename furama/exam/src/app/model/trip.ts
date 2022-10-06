import {Agency} from "./agency";

export interface Trip {
  id?: number;
  departure?: string;
  arrival?: string;
  departureTime?: string;
  arrivalTime?: string;
  agency?: Agency;
}
