import {Component, OnInit} from '@angular/core';

import {CustomerService} from "../../services/customer.service";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  customers!:any;
  errors!:string;
  constructor(private customerService:CustomerService ) {
  }
  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe({
      next:(data)=>{
        this.customers=data;
      },
      error:(error)=>{
        this.errors=error;
      }
    })
  }


}
