import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Apunte } from './apunte-interface';

@Injectable({
  providedIn: 'root'
})
export default class ApunteService {

  private _httpClient = inject(HttpClient);
  private urlBase:string = 'http://127.0.0.1:8000/apunte';
  private urlBase2:string = 'http://127.0.0.1:8000/';
 
  getApuntes ():Observable<Apunte[]>{
    return this._httpClient.get<Apunte[]>(`http://127.0.0.1:8000/apunte/`);

  }

  getApunte (id:number):Observable<Apunte>{
    return this._httpClient.get<Apunte>(`${this.urlBase}/${id}`);
  }

  agregarApunte(apunte:Apunte):Observable<Apunte>{
    return this._httpClient.post<Apunte>(`${this.urlBase}/`,apunte);
  }

  actualizarApunte(apunte:Apunte):Observable<Apunte>{
    return this._httpClient.put<Apunte>(`${this.urlBase}/${apunte.id}`,apunte);
  }
 

  borrarApunte(id:any):Observable<any>{
    return this._httpClient.delete<any>(`${this.urlBase}/${id}`);
  }

}
