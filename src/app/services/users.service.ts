import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

const BASE_URL = "https://sheet.best/api/sheets/8b1d8c0c-800a-4384-ab19-9e07ab206804";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  users(): Observable<User[]> {
    return this.http.get<User[]>(BASE_URL);
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(BASE_URL, user, this.httpOptions);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${BASE_URL}/id/${id}`);
  }
}
