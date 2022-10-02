import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  deleteProduct: Product = {};

  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(next => this.products = next);
    this.categoryService.getAll().subscribe(next => this.categories = next);
  }

  delete(id: number) {
    this.productService.deleteById(id).subscribe(next => this.ngOnInit());
  }

  deleteModal(product: Product) {
    this.deleteProduct = product;
  }
}
