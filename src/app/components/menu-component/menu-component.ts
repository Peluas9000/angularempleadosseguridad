import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceSignals } from '../../services/service.signals';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  constructor(private _router: Router) {}

  private _serviceSignal:ServiceSignals=inject(ServiceSignals)
  public contador =this._serviceSignal.contador;
  

  logout(): void {
    sessionStorage.removeItem("token");
  }
}
