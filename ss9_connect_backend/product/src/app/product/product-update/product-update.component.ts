import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  categories: Category[] = [];
  productForm: FormGroup;
  product: Product = {};
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.productService.findById(parseInt(id)).subscribe(next => {
        this.product = next;
        this.productForm = new FormGroup({
          id: new FormControl(this.product.id),
          name: new FormControl(this.product.name),
          price: new FormControl(this.product.price),
          category: new FormControl(this.product.category),
          description: new FormControl(this.product.description),
        });
      });
    })
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    return this.categoryService.getAll().subscribe(next=> this.categories = next);
  }

  submit() {
    const product = this.productForm.value;
    this.productService.updateProduct(product).subscribe(next => {
      this.router.navigateByUrl("");
    });
  }
}
