import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-docheck',
  templateUrl: './parent-docheck.component.html',
  styleUrls: ['./parent-docheck.component.css']
})
export class ParentDocheckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rates:
   { inr: number }
    = { inr: 0 };

  updateRates() {
    this.rates.inr = 75;
  }

  updateRatesByReference() {
    this.rates = { ...this.rates, inr: 70 };
  }
}
