import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, AuthenticationResponse, UserDto } from '../Shared/interfaces/api-response.interface';

const BASIC_URL = "http://localhost:8081/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signup(signupRequest: any): Observable<ApiResponse<UserDto>> {
    return this.http.post<ApiResponse<UserDto>>(BASIC_URL + "api/auth/signup", signupRequest);
  }

  login(loginRequest: any): Observable<ApiResponse<AuthenticationResponse>> {
    return this.http.post<ApiResponse<AuthenticationResponse>>(BASIC_URL + "api/auth/login", loginRequest);
  }
}
