import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {Trip} from "../../model/trip";
import {TripService} from "../../service/trip.service";

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private tripService: TripService) {

  }

  ngOnInit(): void {
    this.tripService.findAll().subscribe(next => this.trips = next.content);
  }

  deleteModal(trip: Trip) {
    Swal.fire({
      title: 'Xác nhận xoá',
      text: 'Bạn sẽ không khôi phục được chuyến xe "' + trip.agency.busNumber + '"!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Xoá',
      cancelButtonText: 'Giữ lại'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tripService.delete(trip.id).subscribe(next => this.ngOnInit());
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
