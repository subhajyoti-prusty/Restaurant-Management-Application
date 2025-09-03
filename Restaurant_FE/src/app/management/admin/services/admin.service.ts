import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../services/storage.service';

const BASE_URL = "http://localhost:8081/api/"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  postCategory(data: any): Observable<any> {
    return this.http.post<[]>(`${BASE_URL}admin/category`, data,
      {
        headers: this.createAuthorizationHeader()
      }
    )
  }

  createAuthorizationHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    return headers.set(
      "Authorization", "Bearer " + StorageService.getToken()
    );
  }
}
