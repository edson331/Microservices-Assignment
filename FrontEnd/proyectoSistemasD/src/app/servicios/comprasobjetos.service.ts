import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compras } from '../clases/compras';

@Injectable({
  providedIn: 'root'
})
export class ComprasobjetosService {
  private url: string;
  constructor(private _http: HttpClient) { 
    this.url = 'http://localhost:8080';
  }


    getCompras():Observable<Compras[]>{
      return this._http.get<Compras[]>(this.url+'/getCompras');
    }
    AgregarCompra(com: Compras):Observable<Compras>{
      const urlAux =this.url+'/getCompras';
      const body = {
        'id': com.id,
        'estado':com.Estado,
        'cantidad':com.Cantidad,
        'nombre':com.Nombree
      };
      return this._http.post<Compras>(urlAux, body);
    }
    UpdateCompra(com: Compras):Observable<Compras>{
      console.log(com.id+" " +com.Nombree )
      const urlAux =this.url+'/getCompras/'+ com.id;
      console.log(urlAux)
      const body = {
       
        'estado':com.Estado,
        'cantidad':com.Cantidad,
        'nombre':com.Nombree,
      };
      let params = JSON.stringify(Compras);
      let headers = new HttpHeaders().set('Content-Type','application/json');
      return this._http.put<Compras>(urlAux, body,{headers: headers});
    }

    DeleteCompra(id: number):Observable<Compras>{
      const urlAux =this.url+'/getCompras/'+ id;
      console.log(urlAux)
     
      return this._http.delete<Compras>(urlAux);
    }
}