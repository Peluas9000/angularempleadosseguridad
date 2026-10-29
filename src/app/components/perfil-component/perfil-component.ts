import { Component, OnInit } from '@angular/core';
import { Empleado, ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit{
  public empleado?: Empleado;
  public mensaje = '';

  // Ya no necesitamos inyectar el Router aquí porque no vamos a redirigir
  constructor(private _service: ServiceEmpleados) {}

  ngOnInit(): void {
    // Como el Guard ya se ha asegurado de que haya Token para llegar hasta aquí,
    // simplemente pedimos los datos directamente.
    this._service.getPerfilEmpleado().subscribe({
      next: (res) => this.empleado = res,
      error: () => this.mensaje = 'No se han podido cargar los datos del perfil.'
    });
  }}
