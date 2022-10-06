import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(name: string, phoneNumber: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customers?name_like=" + name + "&phoneNumber_like=" + phoneNumber);
  }

  searchAllField(name: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customers?q=" + name);
  }

  save(customer: Customer) {
    return this.httpClient.post("http://localhost:3000/customers", customer);
  }

  findById(id: number) {
    return this.httpClient.get("http://localhost:3000/customers/" + id);
  }

  update(customer: Customer) {
    return this.httpClient.patch("http://localhost:3000/customers/" + customer.id, customer);
  }

  delete(id: number) {
    return this.httpClient.delete("http://localhost:3000/customers/" + id);
  }
}
