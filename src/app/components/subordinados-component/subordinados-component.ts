import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado, ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit {
  public subordinados:Array<Empleado>;
  public mensaje = '';

  constructor(private _service: ServiceEmpleados,
    private _cdr: ChangeDetectorRef
  ) {
    this.subordinados = new Array<Empleado>;
  }

  async ngOnInit(): Promise<void> {
    this.subordinados=await this._service.getSubordinadosAsync();
    this._cdr.detectChanges(); // Forzamos la detección de cambios para actualizar la vista
  }}
