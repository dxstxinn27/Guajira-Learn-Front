import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { DocenteI } from '../../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/usuarios/docentes/`
  other_path = `${this.api_uri_django}/usuarios/docentes/login`

  private docenteId: number = 0;

  constructor(
    private http:HttpClient
  ) { }

  login(correo: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.other_path, { correo, password }, { headers }).pipe(
      tap((response: any) => {
        console.log('Respuesta completa del servidor:', response);
        if (response && response.id) {
          this.docenteId = response.id;
          localStorage.setItem('docenteId', response.id.toString());
          console.log('ID del docente guardado en localStorage:', response.id);
        } else {
          console.warn('ID no encontrado en la respuesta del servidor');
        }
      })
    );
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