import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean;
  public favorite: boolean;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Test Stock Comapny';
    this. code = 'TSC';
    this.price = 100;
    this.previousPrice = 80;
    this.positiveChange = false;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
  }

  toggleFaorite(){
  this.favorite = !this.favorite;
  console.log('Toggled');
  }

}
