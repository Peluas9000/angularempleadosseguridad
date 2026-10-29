import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { AuthGuard } from './guards/auth-guard';
import { EjemplosSignalComponent } from './components/ejemplos-signal-component/ejemplos-signal-component';

const routes: Routes = [
  { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { 
      path: "perfil",
      component: PerfilComponent, 
      canActivate: [AuthGuard]
      
    },
    
    { 
      path: "subordinados", 
      component: SubordinadosComponent,
      canActivate: [AuthGuard]
    },
      { path: "signals", component: EjemplosSignalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
