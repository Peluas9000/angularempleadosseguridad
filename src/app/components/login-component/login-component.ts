import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent implements OnInit{// Referencias a las cajas de texto
  @ViewChild("cajausuario") cajaUsuarioRef!: ElementRef;
  @ViewChild("cajapassword") cajaPasswordRef!: ElementRef;
  
  public mensaje: string;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
    private _serviceAuth:ServiceAuthEmpleados
  ) {
    this.mensaje = "";
  }

  ngOnInit(): void {}

  async realizarLogin(): Promise<void> {
    let usuario = this.cajaUsuarioRef.nativeElement.value;
    let password = this.cajaPasswordRef.nativeElement.value;
    let login=new Login(usuario,password);
    let respuesta=await this._service.loginEmpleadoAsync(login);
    this.mensaje=respuesta.response;
    await this._serviceAuth.almacenarEmpleado(respuesta.token);
    this._cdr.detectChanges(); // Forzamos la detección de cambios para actualizar la vista
  }
  



}
