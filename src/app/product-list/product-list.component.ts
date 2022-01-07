import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  dataSource;
  searchValue;

  constructor(
    public service: ProductService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.service.getAllData().subscribe((list) => {
      this.service.productList = _.cloneDeep(list);
      this.service.filteredSource = _.cloneDeep(list);
    });
  }

  onEdit(row) {
    this.service.formData = row as Product;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '900px';
    dialogConfig.maxHeight = '90vh';
    this.dialog.open(ProductComponent, dialogConfig);
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '900px';
    dialogConfig.maxHeight = '90vh';
    this.service.formData = null;
    this.dialog.open(ProductComponent, dialogConfig);
  }

  applyFilter(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
    if (!this.searchValue) {
      this.service.filteredSource = _.cloneDeep(this.service.productList);
      return;
    }
    this.service.filteredSource = this.service.productList.filter((item) => {
      return Object.keys(item).some((key) => {
        return String(item[key])
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());
      });
    });
  }
}
