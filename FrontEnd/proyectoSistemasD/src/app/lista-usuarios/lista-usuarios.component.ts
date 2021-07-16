import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../clases/usuario';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'Nombree', 'Usuario'];
 
  private usuarioOb:Usuario[]=[];
  //dataSource=this.comprasOb;
  dataSource:any;
  constructor(private usuarioservice:UsuariosService,private rutas:Router) { 
    this.cargarUsuarios();
  }

  ngOnInit(): void {
  }
  cargarUsuarios() {
    this.usuarioservice.getUsuario().subscribe(
     e =>{this.usuarioOb=e;
       this.dataSource = this.usuarioOb;
     }
   )
   this.dataSource = this.usuarioOb;
   console.log("1");
   console.log(this.usuarioOb)
   //this.dataSource = this.comprasOb;
  // console.log(this.comprasOb)
 }
 navegacionPaginas(nave:number){
  switch (nave){
    case 1:
      this.rutas.navigate(['/crearproducto']);
      break;
    case 2:
      this.rutas.navigate(['/home']);
      break;
    case 3:
      this.rutas.navigate(['/listarusuario']);
      break;
    default:
      break;
  }
}

}
