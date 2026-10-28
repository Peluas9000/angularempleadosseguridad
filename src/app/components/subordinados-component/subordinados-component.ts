import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit {public subordinados: Array<any>;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ) {
    this.subordinados = [];
  }

  ngOnInit(): void {
    let token = sessionStorage.getItem("token");

    // PROTECCIÓN DE RUTA
    if (token == null) {
      this._router.navigate(['/login']);
    } else {
      this._service.getSubordinados().subscribe((res) => {
        this.subordinados = res;
      });
    }
  }}
