import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../services/storage.service';
import { ApiResponse, CategoryDto } from '../../../Shared/interfaces/api-response.interface';

const BASE_URL = "http://localhost:8081/api/"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  postCategory(data: any): Observable<ApiResponse<CategoryDto>> {
    return this.http.post<ApiResponse<CategoryDto>>(`${BASE_URL}admin/category`, data,
      {
        headers: this.createAuthorizationHeader()
      }
    )
  }

  getCategories(): Observable<ApiResponse<CategoryDto[]>> {
    return this.http.get<ApiResponse<CategoryDto[]>>(`${BASE_URL}admin/getCategories`,
      {
        headers: this.createAuthorizationHeader()
      }
    )
  }

  searchCategoriesByTitle(title: string): Observable<ApiResponse<CategoryDto[]>> {
    return this.http.get<ApiResponse<CategoryDto[]>>(`${BASE_URL}admin/searchCategories/${title}`,
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
