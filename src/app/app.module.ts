import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { CounterComponent } from './testing/counter/counter.component';
import { PrvsobsComponent } from './prvsobs/prvsobs.component';
import { ConsvsnginitComponent } from './consvsnginit/consvsnginit.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    CounterComponent,
    PrvsobsComponent,
    ConsvsnginitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
