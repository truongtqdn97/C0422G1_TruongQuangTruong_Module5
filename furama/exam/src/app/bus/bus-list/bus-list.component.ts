import {Component, OnInit} from '@angular/core';
import {Bus} from "../../model/bus";
import {BusService} from "../../service/bus.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  busList: Bus[] = [];
  busObj: Bus = {};

  constructor(private busService: BusService) {

  }

  ngOnInit(): void {
    this.busService.findAll().subscribe(next => this.busList = next);
  }

  deleteModal(bus: Bus) {
    Swal.fire({
      title: 'Xác nhận xoá',
      text: 'Bạn sẽ không khôi phục được chuyến xe của "' + bus.name + '"!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xoá',
      cancelButtonText: 'Giữ lại'
    }).then((result) => {
      if (result.isConfirmed) {
        this.busService.delete(bus.id).subscribe(next => this.ngOnInit());
        Swal.fire(
          'Thông báo!',
          'Thông tin chuyến xe đã bị xoá.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Đã hoãn',
          'Thông tin chuyến xe được giữ lại []~(￣▽￣)~*',
          'error'
        )
      }
    })
  }
}
