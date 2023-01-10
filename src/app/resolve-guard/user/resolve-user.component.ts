import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YResolveService } from '../y-resolve.service';
import { YService } from '../y.service';

@Component({
  selector: 'app-user',
  template: `
  <h1>Resolve User Component </h1>
<div *ngFor="let course of coursescomponent">
  <p>{{course.name}}</p>
  <p>{{course.email}}</p>

</div>
<h1> hellow </h1>
  `,
  styles: [
  ]
})
export class ResolveUserComponent implements OnInit {
coursescomponent : any = []
  constructor(public coursesService : YService,public YResolveService : YResolveService,public route:ActivatedRoute) { }

  ngOnInit(): void {
  this.coursescomponent  = this.route.snapshot.data['course']
  }

}
