import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado, ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';

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
  constructor(private _service: ServiceEmpleados,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) {

  }

 async  ngOnInit(): Promise<void> {
  if(sessionStorage.getItem("token")===null){
    this._router.navigate(['/login']);
  }else{
    this.empleado = await this._service.getEmpleadosAsync();
    this._cdr.detectChanges(); // Forzamos la detección de cambios para actualizar la vista
  }}}
