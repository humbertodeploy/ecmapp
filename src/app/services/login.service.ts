import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:3333/api/login/auth";

  login(user: FormGroup): Observable<any>{
    return this.http.post<any>(this.url, user)
  }

  getLogins(): Observable<any>{
    let headers = new Headers();
    let token = localStorage.getItem('token') || '';
    headers.append('x-access-token', token);
    const httpOptions = {
      headers: new HttpHeaders({ 'x-access-token': token })
    };
    return this.http.get<any>('http://localhost:3333/api/login', httpOptions);
  }

  getParent(id: any): Observable<any>{
    let headers = new Headers();
    let token = localStorage.getItem('token') || '';
    headers.append('x-access-token', token);
    const httpOptions = {
      headers: new HttpHeaders({ 'x-access-token': token })
    };
    return this.http.get<any>(`http://localhost:3333/api/login/document/${id}`, httpOptions);
  }
}
