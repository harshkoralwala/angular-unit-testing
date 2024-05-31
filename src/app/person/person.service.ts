import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) {}
  test() {
    return "PersonService Works"
  }
  getAllServerObjects(): Observable<any> {
    return this.httpClient.get<any>('https://api.restful-api.dev/objects');
  }

  getServerObjectById(id: number): Observable<any> {
    return this.httpClient.get<any>(`https://api.restful-api.dev/objects/${id}`);
  }

  addObject(data: any): Observable<any> {
    return this.httpClient.post<any>('https://api.restful-api.dev/objects', data);
  }

  deletObject(id: number): Observable<any> {
    return this.httpClient.delete<any>(`https://api.restful-api.dev/objects/${id}`);
  }

}
