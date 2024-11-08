import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocenteI } from '../../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/usuarios/docentes/`
  other_path = `${this.api_uri_django}/usuarios/docentes/login`

  constructor(
    private http:HttpClient
  ) { }

  login(correo: string, password: string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.other_path, { correo, password }, { headers });
  }

  getAllDocente():Observable<DocenteI[]>{
    return this.http
      .get<DocenteI[]>(this.base_path)
  }

  getOneDocente(id: number):Observable<DocenteI>{
    return this.http
      .get<DocenteI>(`${this.base_path}${id}`)
  }

  createDocente(data: any):Observable<DocenteI>{
    return this.http.post<DocenteI>(this.base_path, data)
  }

  updateDocente(id: number, data: any): Observable<DocenteI> {
    return this.http.put<DocenteI>(`${this.base_path}${id}`, data);
  }

  deleteDocente(id: number): Observable<DocenteI> {
    return this.http.delete<DocenteI>(`${this.base_path}${id}`);
  }

}