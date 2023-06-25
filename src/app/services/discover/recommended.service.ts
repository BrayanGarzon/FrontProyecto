import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/constants';
import { Recommended } from 'src/app/interfaces/discover/recommended.interface';

@Injectable({
  providedIn: 'root'
})
export class RecommendedService {

  constructor(private http: HttpClient) { }

  getRecommended() {
    return this.http.get<Recommended[]>(`${API_URL}/location/recommended/`);
  }
}
