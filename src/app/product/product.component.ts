import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { environment } from 'src/environments/environment.prod';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';

@Component({
  selector: 'app-country',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  isValid: boolean = true;
  isFormSubmitted: boolean = true;
  recId;
  isDuplicate;

  constructor(
    private currentRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private dialogRef: MatDialogRef<ProductComponent>,
    public service: ProductService
  ) {}

  ngOnInit() {
    this.isFormSubmitted = false;

    if (!this.service.formData) {
      this.resetForm();
    }
  }

  onSubmit(form: NgForm) {
    try {
      this.isFormSubmitted = true;
      let isNewRecord: boolean;
      if (this.service.formData.id == -1) {
        isNewRecord = true;
      } else {
        isNewRecord = false;
      }

      if (this.validateForm()) {
        this.service.saveOrUpdateData().subscribe((res) => {
          this.service.formData = res as Product;
          this.isFormSubmitted = false;
          if (isNewRecord == true) {
            this.service.productList = [
              this.service.formData,
              ...this.service.productList,
            ];
            this.service.filteredSource = [
              this.service.formData,
              ...this.service.filteredSource,
            ];
          }
          this.onClose();
        });
      } else {
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  onClose() {
    this.validateForm();
    if (this.isValid) {
      this.resetForm();
      this.dialogRef.close();
    }
  }

  async getDuplicateProductNameCount() {
    await this.service
      .getDuplicateProductNameCount(
        this.service.formData.id,
        this.service.formData.id
      )
      .then((res) => {
        if (res > 0) {
          this.isDuplicate = true;
          this.isValid = false;
          this.service.filteredSource = _.cloneDeep(this.service.productList);
        } else {
          this.isDuplicate = false;
          this.isValid = true;
        }
      });
  }

  validateForm() {
    this.isValid = true;

    if (this.isDuplicate == true) {
      this.isValid = false;
    }
    return this.isValid;
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      id: -1,
      title: '',
    };
  }
}
