import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
interface UserInfo {
  usuario: String;
  pass: String
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  urlApi!: String;
  headers: HttpHeaders = new HttpHeaders;

  constructor(private http: HttpClient) {
    this.urlApi = "http://localhost:3000/api";
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  login(user: any) {
    const path = this.urlApi + '/login';
    return this.http.post(path, user);
  }

  setUser(info: any) {
    localStorage.setItem('info', JSON.stringify(info));
  }

  setTokenAndRole(token: any, role: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }

  getRole(): string{
    return localStorage.getItem('role') || '';
  }



  /* getUser(): UserInfo {
     return JSON.parse(localStorage.getItem('info'));
   }*/

  logout() {
    localStorage.clear();
  }

  relogin(user: any) {
    localStorage.removeItem('info');
    localStorage.setItem('info', JSON.stringify(user));
    return true;
  }
}
