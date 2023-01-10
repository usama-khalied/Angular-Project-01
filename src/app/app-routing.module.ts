import { Component, ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './jwt-authentication/login/login.component';
import { ProfileComponent } from './jwt-authentication/profile/profile.component';
import { DashboardComponent } from './resolve-guard/dashboard/dashboard.component';
import { ResolveLoginComponent } from './resolve-guard/login/resolve-login.component';
import { ResolveUserComponent } from './resolve-guard/user/resolve-user.component';
import { YResolveService } from './resolve-guard/y-resolve.service';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
//   {component:DashboardComponent,path:'dashboard'},
// {component:DashboardComponent,path:'',pathMatch:'dashboard'},
// {component:ProfileComponent,path:'profile'},
{component:ResolveUserComponent,path:'Resolve-user',resolve:{course:YResolveService}},
{component:ResolveLoginComponent,path:'Resolve-login'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
