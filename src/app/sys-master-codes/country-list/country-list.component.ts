import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from '../../shared/country.service';
import { Country } from '../../shared/country.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CountryComponent } from '../country/country.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  dataSource;
  searchValue;

  constructor(
    public service: CountryService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.service.getAllData().subscribe((list) => {
      this.service.countryList = _.cloneDeep(list);
      this.service.filteredSource = _.cloneDeep(list);
    });
  }

  onEdit(row) {
    this.service.formData = row as Country;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '900px';
    dialogConfig.maxHeight = '90vh';
    this.dialog.open(CountryComponent, dialogConfig);
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '900px';
    dialogConfig.maxHeight = '90vh';
    this.service.formData = null;
    this.dialog.open(CountryComponent, dialogConfig);
  }

  applyFilter(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
    if (!this.searchValue) {
      this.service.filteredSource = _.cloneDeep(this.service.countryList);
      return;
    }
    this.service.filteredSource = this.service.countryList.filter((item) => {
      return Object.keys(item).some((key) => {
        return String(item[key])
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());
      });
    });
  }
}
