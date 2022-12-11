import { Component, OnInit , Input , ContentChild, AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit ,AfterContentInit {
  @Input() products:Product[];
  @ContentChild('head') contentHead : ElementRef
  constructor() { }

  ngOnInit(): void {
  }
ngAfterContentInit(): void {
  console.log(this.contentHead.nativeElement)
}
}
interface Product {
  id:number
  name:string
  price:string
}