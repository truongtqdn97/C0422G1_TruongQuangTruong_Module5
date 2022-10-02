import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/products");
  }

  saveProduct(product: Product) {
    return this.httpClient.post("http://localhost:3000/products", product);
  }

  findById(id: number) {
    return this.httpClient.get("http://localhost:3000/products/" + id);
  }

  deleteById(id: number) {
    return this.httpClient.delete("http://localhost:3000/products/" + id);
  }

  updateProduct(product: Product) {
    return this.httpClient.patch("http://localhost:3000/products/" + product.id, product);
  }
}
