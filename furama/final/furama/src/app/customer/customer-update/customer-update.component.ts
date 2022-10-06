import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../model/customer/customer-type";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Customer} from "../../model/customer/customer";
import Swal from "sweetalert2";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  customer: Customer = {};
  customerForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.customerService.findById(parseInt(id)).subscribe(next => {
        this.customer = next;
        this.buildForm();
      });
    });
  }

  ngOnInit(): void {
    this.getCustomerType();
  }

  getCustomerType() {
    this.customerTypeService.findAll().subscribe(next => this.customerTypes = next);
  }

  buildForm() {
    this.customerForm = new FormGroup({
      id: new FormControl(this.customer.id),
      name: new FormControl(this.customer.name),
      birthday: new FormControl(this.customer.birthday),
      gender: new FormControl(this.customer.gender),
      identifyCard: new FormControl(this.customer.identifyCard),
      phoneNumber: new FormControl(this.customer.phoneNumber),
      email: new FormControl(this.customer.email),
      address: new FormControl(this.customer.address),
      customerType: new FormControl(this.customer.customerType.id)
    });
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerTypeService.findById(customer.customerType).subscribe(
      next => customer.customerType = next,
      error => {
      },
      () => {
        this.customerService.update(customer).subscribe(next => {
          this.router.navigateByUrl("customers");
          Swal.fire('Yayyy...', 'Update successfully!', 'success');
        });
      });
  }
}
