import { Component, OnInit } from '@angular/core';
import {BusType} from "../../model/bus-type";
import {Agency} from "../../model/agency";
import {Trip} from "../../model/trip";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TripService} from "../../service/trip.service";
import {AgencyService} from "../../service/agency.service";
import {BusTypeService} from "../../service/bus-type.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-bus-create',
  templateUrl: './bus-create.component.html',
  styleUrls: ['./bus-create.component.css']
})
export class BusCreateComponent implements OnInit {
  busTypes: BusType[] = [];
  agencies: Agency[] = [];
  tripObj: Trip = {};
  busForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private tripService: TripService,
              private agencyService: AgencyService,
              private busTypeService: BusTypeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAgency();
    this.buildForm();
  }

  getAgency() {
    this.agencyService.findAll().subscribe(next => this.agencies = next);
  }

  buildForm() {
    this.busForm = new FormGroup({
      id: new FormControl(),
      departure: new FormControl('', [Validators.required]),
      arrival: new FormControl('', [Validators.required]),
      departureTime: new FormControl('', [Validators.required]),
      arrivalTime: new FormControl('', [Validators.required]),
      agency: new FormControl()
    })
  }

  submit() {
    const bus = this.busForm.value;
    if (this.busForm.valid){
      this.tripService.save(bus).subscribe(next=>{
        this.router.navigateByUrl("bus");
        Swal.fire('Thông báo', 'Tạo mới thành công', 'success');
      })
    }
  }
}
