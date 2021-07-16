import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
//import  'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url: string;
 //public results: [];
  constructor(private _http: HttpClient) { 
    this.url = 'http://localhost:8080';
  }

 /* GetSuperAdmin(){
    return new Promise((resolve, reject) => {
      let urlAux = this.url+"/usuariomaster/getSuperAdmin";
      this._http.get(urlAux)
        .map(res => JSON.parse(JSON.stringify(res)))
        .subscribe(
          result => {console.log(result); resolve(result as Usuario[]);
          },
          err => { reject(err); });
    });
  }*/
  getUsuario():Observable<Usuario[]>{
    return this._http.get<Usuario[]>(this.url+'/getUsuarios');
  }


    
}
