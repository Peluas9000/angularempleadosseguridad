import { Component, OnInit } from '@angular/core';
import { Empleado, ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit {
  public subordinados: Empleado[];
  public mensaje = '';

  constructor(private _service: ServiceEmpleados) {
    this.subordinados = [];
  }

  ngOnInit(): void {
    // Mismo caso: ruta protegida desde fuera, el componente solo consume la API.
    this._service.getSubordinados().subscribe({
      next: (res) => this.subordinados = res,
      error: () => this.mensaje = 'No se han podido cargar los subordinados.'
    });
  }}
