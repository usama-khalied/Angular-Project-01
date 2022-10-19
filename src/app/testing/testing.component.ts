
import { AfterViewInit,  ViewChildren, ElementRef, OnInit, ViewChild, QueryList , Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit , AfterViewInit {
  @ViewChildren('head') head1 : QueryList<any>
  @ViewChild('child') Child : CounterComponent;

  constructor() {


   }
   inc() {
    this.Child.increament()
   }
   dec(){
    this.Child.decreament()
   }
  ngAfterViewInit(): void {
    console.log(this.head1)
    // console.log(this.child.nativeElement)
    // this.head1.first.style.color="red"
    this.head1.toArray()[1].nativeElement.style.color="blue";
   this.head1.first.nativeElement.style.color="red";
   this.head1.last.nativeElement.style.color="green";
  //  this.head1.toArray(1)

  }

  ngOnInit(): void {

  }

}
