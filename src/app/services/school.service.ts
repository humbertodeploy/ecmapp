import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from '../interfaces/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  createSchool(data: any){
    return this.http.post<any>('https://localhost:7193/Escola', data);
  }
  // token = localStorage.getItem('token')

  getAll():Observable<any>{
    // let headers = new Headers();
    // let token = localStorage.getItem('token') || '';
    // headers.append('x-access-token', token);
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'x-access-token': token })
    // };
    return this.http.get<any>('https://localhost:7193/Escola?skip=0&take=50');
  }
 

  // createSchool(data: any):Observable<any>{
  //   let headers = new Headers();
  //   let token = localStorage.getItem('token') || '';
  //   headers.append('x-access-token', token);
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'x-access-token': token })
  //   };
  //   return this.http.post<any>('https://localhost:7193/', data, httpOptions);
  // }


}
