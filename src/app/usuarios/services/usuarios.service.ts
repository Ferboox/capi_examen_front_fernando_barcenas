import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/user.interface';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl: string = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  consultaInformacion(): Observable<Usuario[]>{
    const url = `${this.apiUrl}/users_info/`;

    return this.http.get<Usuario[]>(url)
  }
}
