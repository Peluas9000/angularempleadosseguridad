import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { LoginComponent } from './components/login-component/login-component';

@NgModule({
  declarations: [App, MenuComponent, SubordinadosComponent, PerfilComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
