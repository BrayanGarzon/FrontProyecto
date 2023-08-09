import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/constants';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/interfaces/discover/user.interface';
import { Auth } from 'src/app/interfaces/discover/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private issuer = {
    login: `${API_URL}/users/token/`,
    register: `${API_URL}/users/users/`,
  };

  constructor(private http: HttpClient) { }



  authRegister(user: any): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<any>(`${API_URL}/users/users/`, user, { headers });
  }

  updateRegister(data: FormData): Observable<any> {
    var token = localStorage.getItem('token');
    var userId = localStorage.getItem('user_id');
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Authorization', `Token ${token}`)
    
    return this.http.put<any>(`${API_URL}/users/users/${userId}/`, data, {headers});
  }

  authLogin(auth: Auth): Observable<any> {
    return this.http.post<any>(`${API_URL}/users/token/`, auth).pipe(
      map(response => {
        localStorage.setItem('token', response.token)
        return response
      })
    )
  }


  authMe(token: string | null) {
    if(!token){
      token = localStorage.getItem('token');
    }
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      })
    }
    return this.http.get<any>(`${API_URL}/users/me/`, httpHeader)
  }

}
