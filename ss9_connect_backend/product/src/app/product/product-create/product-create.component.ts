import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    description: new FormControl(),
  });
  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(next=> this.categories = next);
  }

  submit() {
    console.info(this.productForm);
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(next => this.router.navigateByUrl(""));
  }
}
