import {Component, OnInit} from '@angular/core';
import {InventoryService} from "../../services/inventory.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit{

  products:any;
  error!: string;
  constructor(private inventoryService:InventoryService) {
  }
  ngOnInit(): void {
    this.inventoryService.getAllProducts().subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:(erros)=>{
        this.error=erros;
      }
    })
  }

}
