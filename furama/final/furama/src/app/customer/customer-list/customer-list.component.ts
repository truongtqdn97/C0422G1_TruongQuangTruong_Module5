import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../model/customer/customer";
import Swal from 'sweetalert2';

// import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  customer: Customer = {};
  totalRecord: number;
  page: number = 1;

  // customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.findAll("","").subscribe(next => {
      this.customers = next;
      this.totalRecord = next.length;
    });
  }

  deleteModal(customerObj: Customer) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover "' + customerObj.name + '"!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerService.delete(this.customer.id).subscribe(next => this.ngOnInit());
        Swal.fire(
          'Deleted!',
          'Your customer information has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your customer information is safe []~(￣▽￣)~* 😍',
          'error'
        )
      }
    })
  }

  // delete(id: number) {
  //   this.customerService.delete(id).subscribe(
  //     next => {this.ngOnInit();},
  //     error => {},
  //     ()=> Swal.fire('Yeah...', 'Delete successfully!', 'success'));
  // }


  search(name: string, phoneNumber: string) {
    this.customerService.findAll(name,phoneNumber).subscribe(next => {
      this.customers = next;
      this.totalRecord = next.length;
    });
  }

  reset() {
    this.ngOnInit();
  }
}
