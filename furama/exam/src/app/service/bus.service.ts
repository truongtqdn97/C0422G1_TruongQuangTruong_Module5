import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bus} from "../model/bus";

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<any>{
    return this.httpClient.get("http://localhost:3000/busList");
  }

  findById(id: number){
    return this.httpClient.get("http://localhost:3000/busList/" + id);
  }

  delete(id: number){
    return this.httpClient.delete("http://localhost:3000/busList/" + id);
  }

  update(bus: Bus){
    return this.httpClient.patch("http://localhost:3000/busList/" + bus.id, bus);
  }
}
