import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrencyService } from '../../shared/currency.service';
import { Currency } from '../../shared/currency.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CurrencyComponent } from '../currency/currency.component';
import * as _ from 'lodash';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css'],
})
export class CurrencyListComponent implements OnInit {
  dataSource;
  searchValue;
  constructor(
    public service: CurrencyService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.service.getAllData().subscribe((list) => {
      this.service.currencyList = _.cloneDeep(list);
      this.service.filteredSource = _.cloneDeep(list);
    });
  }

  onEdit(row) {
    this.service.formData = row as Currency;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '900px';
    dialogConfig.maxHeight = '90vh';
    this.dialog.open(CurrencyComponent, dialogConfig);
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '900px';
    dialogConfig.maxHeight = '90vh';
    this.service.formData = null;
    this.dialog.open(CurrencyComponent, dialogConfig);
  }

  applyFilter(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
    if (!this.searchValue) {
      this.service.filteredSource = _.cloneDeep(this.service.currencyList);
      return;
    }
    this.service.filteredSource = this.service.currencyList.filter((item) => {
      return Object.keys(item).some((key) => {
        return String(item[key])
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());
      });
    });
  }
}
