import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent   {

  public empleado: any;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ) {}

  ngOnInit(): void {
    let token = sessionStorage.getItem("token");

    // PROTECCIÓN DE RUTA
    if (token == null) {
      this._router.navigate(['/login']);
    } else {
      this._service.getPerfilEmpleado().subscribe((res) => {
        this.empleado = res;
      });
    }
  }
}
