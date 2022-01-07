import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { environment } from 'src/environments/environment.prod';
import { CurrencyService } from '../../shared/currency.service';
import { Currency } from '../../shared/currency.model';
import { MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  isValid: boolean = true;
  isFormSubmitted: boolean = true;
  recId;
  isDuplicate;

  constructor(
    private currentRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private dialogRef: MatDialogRef<CurrencyComponent>,
    public service: CurrencyService
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
      if (this.service.formData.CurrencyId == -1) {
        isNewRecord = true;
      } else {
        isNewRecord = false;
      }

      if (this.validateForm()) {
        this.service.saveOrUpdateData().subscribe((res) => {
          this.service.formData = res as Currency;
          this.isFormSubmitted = false;
          if (isNewRecord == true) {
            this.service.currencyList = [
              this.service.formData,
              ...this.service.currencyList,
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

  async getDuplicateCurrencyNameCount() {
    await this.service
      .getDuplicateCurrencyNameCount(
        this.service.formData.CurrencyId,
        this.service.formData.CurrencyName
      )
      .then((res) => {
        if (res > 0) {
          this.isDuplicate = true;
          this.isValid = false;
          this.service.filteredSource = _.cloneDeep(this.service.currencyList);
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
      CurrencyId: -1,
      UserId: localStorage.getItem('userid') || 'ADMIN',
      RecDate: new Date(),
      CurrencyName: '',
    };
  }
}
