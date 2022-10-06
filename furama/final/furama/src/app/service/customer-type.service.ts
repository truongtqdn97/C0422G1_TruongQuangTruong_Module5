import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customer/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>("http://localhost:3000/customertypes");
  }

  findById(id: number) {
    return this.httpClient.get("http://localhost:3000/customertypes/" + id);
  }
}
