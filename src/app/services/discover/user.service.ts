import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/constants';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/discover/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${API_URL}/user`; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Método para obtener los datos del usuario logeado desde la API
  getUserData(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user`);
  }
}
