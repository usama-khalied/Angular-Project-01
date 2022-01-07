import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { MenuComponent } from './common/menu/menu.component';

import { SysMasterCodesListComponent } from './sys-master-codes/sys-master-codes.component';
import { SpinnerzComponent } from './common/spinnerz/spinnerz.component';
import { CountryComponent } from './sys-master-codes/country/country.component';
import { CountryListComponent } from './sys-master-codes/country-list/country-list.component';
import { CurrencyComponent } from './sys-master-codes/currency/currency.component';
import { CurrencyListComponent } from './sys-master-codes/currency-list/currency-list.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SysMasterCodesListComponent,
    SpinnerzComponent,
    CountryComponent,
    CountryListComponent,
    CurrencyComponent,
    CurrencyListComponent,
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    TableModule,
    CalendarModule,
    ToastModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [DatePipe, CurrencyPipe, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
