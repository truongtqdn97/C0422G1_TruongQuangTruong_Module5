import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BusTypeService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<any>{
    return this.httpClient.get("http://localhost:3000/bustype");
  }

  findById(id: number){
    return this.httpClient.get("http://localhost:3000/bustype/" + id);
  }
}
