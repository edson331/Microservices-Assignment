import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginInvalid = false;
  usuario:any;
  password:any;
  public usuariosT:Usuario[] | undefined;
  constructor(private usuarioService:UsuariosService,private rutas:Router) {
    //this.usuarios= null;
    this.usuarioService.getUsuario().subscribe(
      e =>this.usuariosT=e,
      

    );
  
   }

  ngOnInit(): void {
   
    
  }
  onSubmit(){
   console.log(this.usuariosT)
   this.usuariosT?.forEach(element => {console.log(element.dUsuario);console.log(element.password); if(element.dUsuario== this.usuario && element.password == this.password ){
    console.log("entro")
    this.loginInvalid = false;
    this.rutas.navigate(['/home']);
  }else{console.log("no")}})
  /*  for(var usua in this.usuariosT){
      console.log(usua)
      

    }*/
    this.loginInvalid = true;
  }

}
