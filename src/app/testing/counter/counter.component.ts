import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      counter works! {{this.count}}
    </p>
  `,
  styles: [
  ]
})
export class CounterComponent implements OnInit {
count = 0
  constructor() { }
increament() {
this.count++;
}
decreament() {
  this.count--;
}
  ngOnInit(): void {
  }

}
