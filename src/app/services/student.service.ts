import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    // let headers = new Headers();
    // let token = localStorage.getItem('token') || '';
    // headers.append('x-access-token', token);
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'x-access-token': token })
    // };
    return this.http.get<any>('https://localhost:7193/Aluno');
  }

  create(student: any): Observable<any>{
    // let headers = new Headers();
    // let token = localStorage.getItem('token') || '';
    // headers.append('x-access-token', token);
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'x-access-token': token })
    // };
    return this.http.post<any>('https://localhost:7193/Aluno', student);
  }

  getLatitudeLongitude(rua: any,numero: any,bairro: any,cidade: any):Observable<any>{
    let apiKey: string = `073892c503d449fe98f581121f040eac`
    let enderecoCompleto: string = `${rua} ${numero}, ${bairro}, ${cidade}`
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(enderecoCompleto)}&key=${apiKey}`;

    // let headers = new Headers();
    // let token = localStorage.getItem('token') || '';
    // headers.append('x-access-token', token);
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'x-access-token': token })
    // };
    return this.http.get<any>(url);
  }
}
