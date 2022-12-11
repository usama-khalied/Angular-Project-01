import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {
  public salesProducts: Product[] = [
    { id: 1, name: 'Acs', price: '100'},
    { id: 2, name: 'Phones', price: '2000'},
    { id: 3, name: 'Fashion', price: '5000'},
    { id: 4, name: 'Electronics', price: '3000'},
   ];
 
   public topProducts = [
     { id: 1, name: 'Phone', price: '2000'},
     { id: 2, name: 'Laptop', price: '6000'},
     { id: 3, name: 'Decor', price: '12000'},
     { id: 4, name: 'Electronics', price: '33000'},
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
interface Product {
  id:number
  name:string
  price:string
}