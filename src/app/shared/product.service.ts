import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  formData: Product;
  productList: Product[];
  filteredSource: Product[];
  dataSource;
  constructor(private http: HttpClient) {}

  saveOrUpdateData() {
    let body = {
      ...this.formData,
    };
    return this.http.post(environment.fakeApiUrl + '/products', body);
  }

  getAllData(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.fakeApiUrl + '/products');
  }

  getDataById(id): Observable<Product> {
    return this.http.get<Product>(environment.fakeApiUrl + '/products/' + id);
  }

  getDuplicateProductNameCount(id, label): any {
    return this.http
      .get(
        environment.apiUrl +
          '/Product/GetDuplicateProductNameCount/' +
          '?id=' +
          id +
          '&label=' +
          label
      )
      .toPromise();
  }
}
