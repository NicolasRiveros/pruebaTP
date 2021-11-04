import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { publicaciones } from '../models/publicaciones.model'

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  urlApi: String;
  headers: HttpHeaders = new HttpHeaders;
  constructor(private http: HttpClient) {
    this.urlApi = "http://localhost:3000/api";
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getpublicaciones(): Observable<any> {
    return this.http.get<publicaciones>(this.urlApi + '/publicaciones', { headers: this.headers }).pipe(res => res);
  }

  savepublicaciones(publicacion: publicaciones): Observable<any> {
    return this.http.post<publicaciones>(this.urlApi + '/registrar', publicacion, { headers: this.headers }).pipe(res => res);
  }
}
