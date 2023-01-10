import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YService {
  courses = [
    {
      name: 'Usama',
      email: 'usamakhalied@@gmail.com',
    },
    {
      name: 'Usama',
      email: 'usamakhalied@@gmail.com',
    },
    {
      name: 'Usama',
      email: 'usamakhalied@@gmail.com',
    },
    {
      name: 'Usama',
      email: 'usamakhalied@@gmail.com',
    },
    {
      name: 'Usama',
      email: 'usamakhalied@@gmail.com',
    },
    {
      name: 'Usama',
      email: 'usamakhalied@@gmail.com',
    },
    {
      name: 'Usama',
      email: 'usamakhalied@@gmail.com',
    },
    {
      name: 'Usama',
      email: 'usamakhalied@@gmail.com',
    },
  ];
  getAllCourses():any {
    const courseList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.courses);
      },5000);
    });
    return courseList
  }
  constructor() {}

}
