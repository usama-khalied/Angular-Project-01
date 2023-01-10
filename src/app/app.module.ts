import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { CounterComponent } from './testing/counter/counter.component';
import { PrvsobsComponent } from './prvsobs/prvsobs.component';
import { ConsvsnginitComponent } from './consvsnginit/consvsnginit.component';
import { ParentComponent } from './ngContent/parent/parent.component';
import { ChildComponent } from './ngContent/child/child.component';
import { LoginComponent } from './jwt-authentication/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './jwt-authentication/profile/profile.component';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { RateComponent } from './ngDoCheck/rate/rate.component';
import { ParentDocheckComponent } from './ngDoCheck/parent-docheck/parent-docheck.component';
import { GoogleLoginComponent } from './goolgeLogin/google-login/google-login.component';
import { DashboardComponent } from './resolve-guard/dashboard/dashboard.component';
import { ResolveUserComponent } from './resolve-guard/user/resolve-user.component';
import { ResolveLoginComponent } from './resolve-guard/login/resolve-login.component';
import { YResolveService } from './resolve-guard/y-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    CounterComponent,
    PrvsobsComponent,
    ConsvsnginitComponent,
    ParentComponent,
    ChildComponent,
    LoginComponent,
    ProfileComponent,
    RateComponent,
    ParentDocheckComponent,
    GoogleLoginComponent,
    DashboardComponent,
    ResolveUserComponent,
    ResolveLoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    YResolveService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
