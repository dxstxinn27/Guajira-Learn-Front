import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { EstudianteI } from '../../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/usuarios/estudiantes/`
  other_path = `${this.api_uri_django}/usuarios/estudiantes/login`

  private estudianteId: number = 0;

  constructor(
    private http:HttpClient
  ) { }

  login(correo: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.other_path, { correo, password }, { headers }).pipe(
      tap((response: any) => {
        console.log('Respuesta completa del servidor:', response);
        if (response && response.id) {
          this.estudianteId = response.id;
          localStorage.setItem('estudianteId', response.id.toString());
          console.log('ID del estudiante guardado en localStorage:', response.id);
        } else {
          console.warn('ID no encontrado en la respuesta del servidor');
        }
      })
    );
  }

  getAllEstudiante():Observable<EstudianteI[]>{
    return this.http
      .get<EstudianteI[]>(this.base_path)
  }

  getOneEstudiante(id: number):Observable<EstudianteI>{
    return this.http
      .get<EstudianteI>(`${this.base_path}${id}`)
  }

  createEstudiante(data: any):Observable<EstudianteI>{
    return this.http.post<EstudianteI>(this.base_path, data)
  }

  updateEstudiante(id: number, data: any): Observable<EstudianteI> {
    return this.http.put<EstudianteI>(`${this.base_path}${id}`, data);
  }

  deleteEstudiante(id: number): Observable<EstudianteI> {
    return this.http.delete<EstudianteI>(`${this.base_path}${id}`);
  }
}
