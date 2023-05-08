import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerModule} from "../modules/customer.module";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Observable, of} from "rxjs";
import {data} from "autoprefixer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers!:Array<CustomerModule>;
  exception!:string
  constructor(private httpClient:HttpClient) { }


}
