import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compras } from '../clases/compras';
import { ComprasobjetosService } from '../servicios/comprasobjetos.service';

@Component({
  selector: 'app-crearcompra',
  templateUrl: './crearcompra.component.html',
  styleUrls: ['./crearcompra.component.css']
})
export class CrearcompraComponent implements OnInit {
  compras:Compras=new Compras(1,"",1,1);
  cantidad:number=0;
  nombre:string="";
  constructor(private comprasservice:ComprasobjetosService,private rutas:Router) { }

  ngOnInit(): void {
  }
  crearProducto(){

  }

  registrarProducto(){
    console.log(this.nombre + this.cantidad)
   this.compras = new Compras(0,this.nombre,this.cantidad,1)
    this.comprasservice.AgregarCompra(this.compras).subscribe(
      res=>this.rutas.navigate(['/home'])
    );
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
