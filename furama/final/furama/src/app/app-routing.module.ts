import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {HomeComponent} from "./home/home.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {CustomerUpdateComponent} from "./customer/customer-update/customer-update.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/create', component: CustomerCreateComponent},
  {path: 'customers/update/:id', component: CustomerUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
