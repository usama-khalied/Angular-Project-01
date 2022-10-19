import { Component ,  ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'practice-angular';
 data :string ="";
 change:string=""
fontSize:number=10;
para:string =""
  ngOnInit(): void {


    
  }
  setText(event:any) {
    const val = event.target.value;
    this.para = val
  }
  Operation(operation:any){
   if(operation==='plus') {
       this.fontSize +=1;
   }
   else {
    this.fontSize -= 1
   }
   this.fontSize.toString()
  }
onChangeDetection() {
  
}
}
