import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fighter } from '../fighter';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get20Fighters (): Observable<Fighter[]> {
    return this.http.get<Fighter[]>('http://localhost:3000/fighters?_limit=20');
  }
}
