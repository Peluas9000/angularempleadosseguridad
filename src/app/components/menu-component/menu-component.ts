import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceSignals } from '../../services/service.signals';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  constructor(private _router: Router) {}

  private _serviceSignal:ServiceSignals=inject(ServiceSignals)
  private _serviceAuth:ServiceAuthEmpleados=inject(ServiceAuthEmpleados)
  public usuario=this._serviceAuth.user;
  public contador =this._serviceSignal.contador;
  

  logout(): void {
    this._serviceAuth.logOutEmpleado();
  }
}
