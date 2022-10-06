import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {BusType} from "../../model/bus-type";
import {Bus} from "../../model/bus";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BusService} from "../../service/bus.service";
import {BusTypeService} from "../../service/bus-type.service";

@Component({
  selector: 'app-bus-update',
  templateUrl: './bus-update.component.html',
  styleUrls: ['./bus-update.component.css']
})
export class BusUpdateComponent implements OnInit {
  busTypes: BusType[] = [];
  busObj: Bus = {};
  busForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private busService: BusService,
              private busTypeService: BusTypeService,
              private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.busService.findById(parseInt(id)).subscribe(next => {
        this.busObj = next;
        this.buildForm();
      })
    })
  }

  ngOnInit(): void {
    this.getBusType();
  }

  getBusType() {
    this.busTypeService.findAll().subscribe(next => this.busTypes = next);
  }

  buildForm() {
    this.busForm = new FormGroup({
      id: new FormControl(this.busObj.id),
      busNumber: new FormControl(this.busObj.busNumber),
      name: new FormControl(this.busObj.name, [Validators.required]),
      go: new FormControl(this.busObj.go, [Validators.required]),
      arrival: new FormControl(this.busObj.arrival, [Validators.required]),
      phone: new FormControl(this.busObj.phone, [Validators.required, Validators.pattern("^(090|093|097)\\d{7}$")]),
      email: new FormControl(this.busObj.email, [Validators.required, Validators.email]),
      hourGo: new FormControl(this.busObj.hourGo, [Validators.required]),
      hourArrival: new FormControl(this.busObj.hourArrival, [Validators.required]),
      busType: new FormControl(this.busObj.busType.id)
    })
  }

  submit() {
    const bus = this.busForm.value;
    console.warn(bus);
    if (!this.busForm.invalid) {
      this.busTypeService.findById(bus.busType).subscribe(
        next => bus.busType = next,
        error => {
        },
        () => {
          this.busService.update(bus).subscribe(next => {
            this.router.navigateByUrl("bus");
            Swal.fire('Thông báo', 'Cập nhật thành công', 'success');
          });
        });
    }
  }
}
