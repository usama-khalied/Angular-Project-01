import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { YService } from './y.service';

@Injectable({
  providedIn: 'root'
})
export class YResolveService implements Resolve<any>{
  constructor(public coursesService : YService) { }



resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
      // this.coursescomponent = this.coursesService.courses
  return  this.coursesService.getAllCourses().then((data:any) => {
      return data
    })
}
}
