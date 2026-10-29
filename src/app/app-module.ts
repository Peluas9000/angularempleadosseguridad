import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { LoginComponent } from './components/login-component/login-component';
import { FormsModule } from '@angular/forms';
import { ServiceEmpleados } from './services/service.empleados';
import { AuthGuard } from './guards/auth-guard';
import { EjemplosSignalComponent } from './components/ejemplos-signal-component/ejemplos-signal-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    SubordinadosComponent,
    PerfilComponent,
    LoginComponent,
    EjemplosSignalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServiceEmpleados,
    AuthGuard,
  ],
  bootstrap: [App],
})
export class AppModule {}
