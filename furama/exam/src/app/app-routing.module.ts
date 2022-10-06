import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BusListComponent} from "./bus/bus-list/bus-list.component";
import {BusUpdateComponent} from "./bus/bus-update/bus-update.component";
import {BusCreateComponent} from "./bus/bus-create/bus-create.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bus', component: BusListComponent},
  {path: 'bus/update/:id', component: BusUpdateComponent},
  {path: 'bus/create', component: BusCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
