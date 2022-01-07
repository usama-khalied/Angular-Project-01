import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from './country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  formData: Country;
  countryList: Country[];
  filteredSource: Country[];
  dataSource;
  constructor(private http: HttpClient) {}

  saveOrUpdateData() {
    let body = {
      ...this.formData,
    };
    return this.http.post(environment.apiUrl + '/Country/PostData', body);
  }

  getAllData(): Observable<Country[]> {
    return this.http.get<Country[]>(environment.apiUrl + '/Country/getAllData');
  }

  getDataById(id): Observable<Country> {
    return this.http.get<Country>(
      environment.apiUrl + '/Country/GetDataById/?id=' + id
    );
  }

  getDuplicateCountryNameCount(id, label): any {
    return this.http
      .get(
        environment.apiUrl +
          '/Country/GetDuplicateCountryNameCount/' +
          '?id=' +
          id +
          '&label=' +
          label
      )
      .toPromise();
  }
}
