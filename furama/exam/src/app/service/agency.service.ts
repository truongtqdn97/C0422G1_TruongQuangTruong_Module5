import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/agencies");
  }

  findById(id: number) {
    return this.httpClient.get("http://localhost:8080/agencies/" + id);
  }
}
