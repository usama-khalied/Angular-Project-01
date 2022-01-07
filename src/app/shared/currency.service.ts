import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Currency } from './currency.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  formData: Currency;
  currencyList: Currency[];
  filteredSource: Currency[];
  dataSource;
  constructor(private http: HttpClient) {}

  saveOrUpdateData() {
    let body = {
      ...this.formData,
    };
    return this.http.post(environment.apiUrl + '/Currency/PostData', body);
  }

  getAllData(): Observable<Currency[]> {
    return this.http.get<Currency[]>(
      environment.apiUrl + '/Currency/getAllData'
    );
  }

  getDataById(id): Observable<Currency> {
    return this.http.get<Currency>(
      environment.apiUrl + '/Currency/GetDataById/?id=' + id
    );
  }

  getDuplicateCurrencyNameCount(id, label): any {
    return this.http
      .get(
        environment.apiUrl +
          '/Currency/GetDuplicateCurrencyNameCount/' +
          '?id=' +
          id +
          '&label=' +
          label
      )
      .toPromise();
  }
}
