  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { User } from 'src/app/interfaces/discover/user.interface';
  import { API_URL } from 'src/app/constants';


  @Injectable({
    providedIn: 'root',
  })
  export class UserService {

    constructor(private http: HttpClient) {}

    // Método para obtener los datos del usuario logeado desde la API
    getUserData(): Observable<User> {
      var token = localStorage.getItem('token');
      const httpHeader = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        })
      }
      
      return this.http.get<User>(`${API_URL}/users/me/` , httpHeader);
    }

    getUserById(id:number): Observable<User> {
      var token = localStorage.getItem('token');
      const httpHeader = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        })
      }
      
      return this.http.get<User>(`${API_URL}/users/me/${id}` , httpHeader);
    }
    
    
  }
