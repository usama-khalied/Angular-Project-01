import { Component, ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './jwt-authentication/login/login.component';
import { ProfileComponent } from './jwt-authentication/profile/profile.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
{component:LoginComponent,path:''},
{component:ProfileComponent,path:'profile'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
