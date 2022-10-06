import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../model/customer/customer-type";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCustomerType();
    this.buildForm();
  }

  getCustomerType() {
    this.customerTypeService.findAll().subscribe(next => this.customerTypes = next);
  }

  buildForm() {
    this.customerForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      gender: new FormControl(''),
      identifyCard: new FormControl('', [Validators.required, Validators.pattern("^\\d{9}$")]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required])
    });
  }

  submit() {
    console.info(this.customerForm);
    const customer = this.customerForm.value;
    if (!this.customerForm.invalid){
      this.customerService.save(customer).subscribe(next => {
        this.router.navigateByUrl("customers");
        Swal.fire('Yeah...', 'Create successfully!', 'success');
      });
    }

  }
}
