import { Injectable } from '@angular/core';

const TOKEN = 'token';
const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  static getToken(): string{
    return window.localStorage.getItem(TOKEN);
  }

  static removeToken(): void {
    window.localStorage.removeItem(TOKEN);
  }

  static saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getUser(): any {
    const user = window.localStorage.getItem(USER);
    return JSON.parse(user);
  }

  static removeUser(): void {
    window.localStorage.removeItem(USER);
  }

  static getUserRole(): string {
    const user = this.getUser();
    if (user === null) {
      return '';
    }
    return user.userRole;
  }

  static isAdminLoggedIn(): boolean {

    if (this.getToken() === null) {
      return false;      
    }

    const userRole = this.getUserRole();

    if (userRole === '') {
      return false;
    }
    
    return userRole == 'ADMIN';
  }

  static isCustomerLoggedIn(): boolean {

    if (this.getToken() === null) {
      return false;      
    }

    const userRole = this.getUserRole();

    if (userRole === '') {
      return false;
    }
    
    return userRole == 'CUSTOMER';
  }
}
