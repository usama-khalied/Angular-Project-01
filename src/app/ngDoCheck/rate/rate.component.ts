import { Component, DoCheck, OnInit, SimpleChanges , Input } from '@angular/core';
import {   throwError } from 'rxjs';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit , DoCheck {
  ngOnInit(): void {
  
  }

  @Input() rates: { inr: number } = { inr: 0 };
  oldRate = 0;
  diff:any = undefined;

  ngOnChanges(changes: SimpleChanges) {
    // This will only capture rates changes if we change it by reference
    console.log('Is first change?', changes.rates.firstChange);
  }

  ngDoCheck() {
    if (this.rates.inr !== this.oldRate) {
      this.diff = this.rates.inr - this.oldRate;
      this.oldRate = this.rates.inr;
    }
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
