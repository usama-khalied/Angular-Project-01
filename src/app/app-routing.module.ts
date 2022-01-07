import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysMasterCodesListComponent } from './sys-master-codes/sys-master-codes.component';
import { CountryListComponent } from './sys-master-codes/country-list/country-list.component';
import { CurrencyListComponent } from './sys-master-codes/currency-list/currency-list.component';
import { ProductListComponent } from './product-list/product-list.component';
const routes: Routes = [
  {
    path: '',
    component: SysMasterCodesListComponent,
  },
  {
    path: 'sys-master-codes',
    component: SysMasterCodesListComponent,
  },
  { path: 'country-list', component: CountryListComponent },
  { path: 'currency-list', component: CurrencyListComponent },
  { path: 'product-list', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
