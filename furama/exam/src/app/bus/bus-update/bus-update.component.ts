import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {BusType} from "../../model/bus-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BusTypeService} from "../../service/bus-type.service";
import {TripService} from "../../service/trip.service";
import {AgencyService} from "../../service/agency.service";
import {Trip} from "../../model/trip";
import {Agency} from "../../model/agency";

@Component({
  selector: 'app-bus-update',
  templateUrl: './bus-update.component.html',
  styleUrls: ['./bus-update.component.css']
})
export class BusUpdateComponent implements OnInit {
  busTypes: BusType[] = [];
  agencies: Agency[] = [];
  tripObj: Trip = {};
  busForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private tripService: TripService,
              private agencyService: AgencyService,
              private busTypeService: BusTypeService,
              private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.tripService.findById(parseInt(id)).subscribe(next => {
        this.tripObj = next;
        this.buildForm();
      })
    })
  }

  ngOnInit(): void {
    // this.getBusType(); //no need
    this.getAgency();
  }

  getAgency() {
    this.agencyService.findAll().subscribe(next => this.agencies = next);
  }

  getBusType() {
    this.busTypeService.findAll().subscribe(next => this.busTypes = next);
  }

  buildForm() {
    this.busForm = new FormGroup({
      id: new FormControl(this.tripObj.id),
      departure: new FormControl(this.tripObj.departure, [Validators.required]),
      arrival: new FormControl(this.tripObj.arrival, [Validators.required]),
      departureTime: new FormControl(this.tripObj.departureTime, [Validators.required]),
      arrivalTime: new FormControl(this.tripObj.arrivalTime, [Validators.required]),
      agency: new FormControl(this.tripObj.agency.id)
    })
  }

  submit() {
    const bus = this.busForm.value;
    console.warn(bus);
    if (!this.busForm.invalid) {
      this.agencyService.findById(bus.agency).subscribe(
        next => bus.agency = next,
        error => {
        },
        () => {
          this.tripService.update(bus).subscribe(next => {
            this.router.navigateByUrl("bus");
            Swal.fire('Thông báo', 'Cập nhật thành công', 'success');
          });
        });
    }
  }
}
