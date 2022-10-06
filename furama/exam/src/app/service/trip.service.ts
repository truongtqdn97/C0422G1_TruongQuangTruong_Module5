import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trip} from "../model/trip";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/trips");
  }

  findById(id: number){
    return this.httpClient.get("http://localhost:8080/trips/" + id);
  }

  save(trip: Trip){
    return this.httpClient.post("http://localhost:8080/trips" , trip);
  }

  delete(id: number){
    return this.httpClient.delete("http://localhost:8080/trips/" + id);
  }

  update(trip: Trip) {
    return this.httpClient.patch("http://localhost:8080/trips/" + trip.id, trip);
  }
}
