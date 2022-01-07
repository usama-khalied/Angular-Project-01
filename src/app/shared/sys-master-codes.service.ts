import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';
import { SysMasterCodes } from './sys-master-codes.model';

@Injectable({
  providedIn: 'root',
})
export class SysMasterCodesService {
  formData: SysMasterCodes;
  sysMasterCodesList: SysMasterCodes[];
  filteredSource: SysMasterCodes[];
  constructor(private http: HttpClient) {}

  saveOrUpdateData() {
    let body = {
      ...this.formData,
    };
    return this.http.post(
      environment.apiUrl + '/SysMasterCodes/PostData',
      body
    );
  }

  getAllData(): Observable<SysMasterCodes[]> {
    return this.http.get<SysMasterCodes[]>(
      environment.apiUrl + '/SysMasterCodes/GetAllData'
    );
  }

  getDataById(id): Observable<SysMasterCodes> {
    return this.http.get<SysMasterCodes>(
      environment.apiUrl + '/SysMasterCodes/GetDataById/?id=' + id
    );
  }

  getDuplicateSysMasterCodeDescCount(id, label): any {
    return this.http
      .get(
        environment.apiUrl +
          '/SysMasterCodes/GetDuplicateSysMasterCodeDescCount/' +
          '?id=' +
          id +
          '&label=' +
          label
      )
      .toPromise();
  }
}
