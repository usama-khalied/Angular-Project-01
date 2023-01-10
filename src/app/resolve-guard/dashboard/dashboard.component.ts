import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <p>
      dashboard works!
      <button  [routerLink]="['/Resolve-user']">Resolve User</button>
      <button  [routerLink]="['/Resolve-login']">Resolve Login</button>

    </p>
  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
