import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearcompraComponent } from './crearcompra/crearcompra.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './login/login.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component'

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home',
    component:PaginaInicioComponent
  },
  {
    path:'crearproducto',
    component:CrearcompraComponent
  } ,
  {
    path:'listarusuario',
    component:ListaUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
