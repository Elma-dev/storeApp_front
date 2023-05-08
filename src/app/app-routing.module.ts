import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./components/customer/customer.component";
import {BillingComponent} from "./components/billing/billing.component";
import {InventoryComponent} from "./components/inventory/inventory.component";

const routes: Routes = [
  {path:'customers',component:CustomerComponent},
  {path:'billings',component:BillingComponent},
  {path:'inventory',component:InventoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
