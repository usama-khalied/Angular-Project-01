import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { environment } from 'src/environments/environment.prod';
import { CountryService } from '../../shared/country.service';
import { Country } from '../../shared/country.model';
import { MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  isValid: boolean = true;
  isFormSubmitted: boolean = true;
  recId;
  isDuplicate;

  constructor(
    private currentRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private dialogRef: MatDialogRef<CountryComponent>,
    public service: CountryService
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
      if (this.service.formData.CountryId == -1) {
        isNewRecord = true;
      } else {
        isNewRecord = false;
      }

      if (this.validateForm()) {
        this.service.saveOrUpdateData().subscribe((res) => {
          this.service.formData = res as Country;
          this.isFormSubmitted = false;
          if (isNewRecord == true) {
            this.service.countryList = [
              this.service.formData,
              ...this.service.countryList,
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

  async getDuplicateCountryNameCount() {
    await this.service
      .getDuplicateCountryNameCount(
        this.service.formData.CountryId,
        this.service.formData.CountryName
      )
      .then((res) => {
        if (res > 0) {
          this.isDuplicate = true;
          this.isValid = false;
          this.service.filteredSource = _.cloneDeep(this.service.countryList);
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
      CountryId: -1,
      UserId: localStorage.getItem('userid') || 'ADMIN',
      RecDate: new Date(),
      CountryName: '',
    };
  }
}
