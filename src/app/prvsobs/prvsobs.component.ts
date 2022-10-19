import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {filter} from 'rxjs/operators'

@Component({
  selector: 'app-prvsobs',
  templateUrl: './prvsobs.component.html',
  styleUrls: ['./prvsobs.component.css']
})
export class PrvsobsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Promises
    const promise =  new Promise(resolve => {
      // console.log('Promise call .......')
      setTimeout(() => {
        resolve('Promise Working1')
        resolve('Promise Working2')
        resolve('Promise Working3')
        resolve('Promise Working4')

      }, 1000);
    })
   promise.then((res) => {
    console.log(res)
   })


    // console.log(promise)
    //  Observable 
   const observable = new Observable(subcribe => {
    // console.log('Observable call .......')
    setTimeout(() => {
      subcribe.next('Observable working1')
      subcribe.next('Observable working2')
      subcribe.next('Observable working3')
      subcribe.next('Observable working4')

    }, 1000);
   })
   observable.pipe(
     filter(d => d === 'Observable working2')).subscribe((result) => console.log(result))
    }

}

//             Observable 
      //  Observabl ko jab tak subcribe nh karo ge 
      //  wo data print nh karey gaa. aur observable
      //  subcribe honey k baad multiple value print
      //  krta hai.

//             Promise 
      //  Promise hamara resolve honey k baaad ek he
      //  vale print krta hai.  aur promisen k ander
      //  koi aur value print karo gey to wo print 
      //  ho jaayen gi jo Asyncronouse sey bahar hogi 
