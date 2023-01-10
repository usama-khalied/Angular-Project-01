import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolve-login',
  template: `
  <h1>Resolve Login Component</h1>
    <p>
      login works!
    </p>
    <h1>Login component </h1>
  `,
  styles: [
  ]
})
export class ResolveLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Resolve Login")
  }

}
