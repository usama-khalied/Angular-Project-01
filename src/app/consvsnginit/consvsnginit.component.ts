import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consvsnginit',
  templateUrl: './consvsnginit.component.html',
  styleUrls: ['./consvsnginit.component.css']
})
export class ConsvsnginitComponent implements OnInit {

  constructor() {
    console.log("Constructor callled")

   }

  ngOnInit(): void {
    console.log("ngOnInit called")
  }
  ngOnChange() {
   console.log("ngOnChanges")
  }
}
