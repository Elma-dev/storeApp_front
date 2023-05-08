import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable, of} from "rxjs";
import {CustomerModule} from "../modules/customer.module";
import {data} from "autoprefixer";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers!:Array<CustomerModule>;
  exception!:string
  data!:any;
  constructor(private httpClient:HttpClient) { }

  public getAllCustomers():Observable<any>{
    return this.httpClient.get("http://localhost:8888/CUSTOMER-SERVICE/customers");
  }


}
