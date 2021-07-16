import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Compras } from '../clases/compras';
import { ComprasobjetosService } from '../servicios/comprasobjetos.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdatedialogconfirmComponent } from '../updatedialogconfirm/updatedialogconfirm.component';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';
export interface DialogData {
  nombre: string;
  cantidad: number;
  estado:number;
  id:number;
}


@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {
  displayedColumns: string[] = ['position', 'Nombree', 'Cantidad', 'Estado','Update'];
 
  private comprasOb:Compras[]=[];
  //dataSource=this.comprasOb;
  dataSource:any;
  nombre:string="";
  cantidad:number=0;
  estado:number=0;
  id:number=0;
  indice:number=0;
  constructor(private comprasservice:ComprasobjetosService,private rutas:Router,public dialog: MatDialog) { 
    this.cargarCompras();
  }

  ngOnInit(): void {
    
   
  }
  openDialog(id:number,estado:number,nombreP:string,cantidadP:number): void {
    const dialogRef = this.dialog.open(UpdatedialogconfirmComponent, {
      width: '250px',
      data: {nombre: nombreP, cantidad: cantidadP}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.nombre);
      this.nombre = result.nombre;
      this.cantidad = result.cantidad;
      if(result.nombre!= undefined || result.nombre!= null || result.nombre!=""){
        console.log("modificara")
        this.comprasservice.UpdateCompra(new Compras(id,result.nombre,result.cantidad,1)).subscribe(
          response => {
            window.location.reload()
    
          },
          error => {
            console.log(error);
          }
        );
        //this.comprasservice.UpdateCompra(new Compras(id,result.nombre,result.cantidad,1))
      }
    });
  }
  openDialog1(id:number,nom:string,esta:number){
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '250px',
      data: {nombre: nom, estado: esta}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.nombre);
      if(result.nombre!= undefined || result.nombre!= null || result.nombre!=""){
        console.log("eliminar")
        this.comprasservice.DeleteCompra(id).subscribe(
          response => {
            window.location.reload()
          },
          error => {
            console.log(error);
          }
        );
        //this.comprasservice.DeleteCompra(id)
      }
    });
  }
   cargarCompras() {
     this.comprasservice.getCompras().subscribe(
      e =>{this.comprasOb=e;
        this.dataSource = this.comprasOb;
      }
    )
    this.dataSource = this.comprasOb;
    console.log("1");
    console.log(this.comprasOb)
    //this.dataSource = this.comprasOb;
   // console.log(this.comprasOb)
  }
  crearProducto(){
    this.rutas.navigate(['/crearproducto']);
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


