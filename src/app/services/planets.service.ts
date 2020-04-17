import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../interfaces/planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private url = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getPlanets(): Observable<Planet[]> {
    return this.http.get<any>(`${this.url}/api/planets`, {
      headers: { 'content-type': 'application/json' }
    });
  }

  getPlanetById(parm: string): Observable<Planet> {
    return this.http.get<any>(`${this.url}/api/planets/${parm}`, {
      headers: { 'content-type': 'application/json' }
    });
  }

  updatePlanet(parm: string, data: any): Observable<Planet> {
    return this.http.put<any>(`${this.url}/api/planets/${parm}`, data, {
      headers: { 'content-type': 'application/json' }
    });
  }
}
