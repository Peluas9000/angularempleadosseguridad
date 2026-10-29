import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {// Referencias a las cajas de texto
  @ViewChild("cajausuario") cajaUsuarioRef!: ElementRef;
  @ViewChild("cajapassword") cajaPasswordRef!: ElementRef;
  
  public mensaje: string;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ) {
    this.mensaje = "";
  }

  realizarLogin(): void {
    let usuario = this.cajaUsuarioRef.nativeElement.value;
    let password = this.cajaPasswordRef.nativeElement.value;

    this.mensaje = "";
    sessionStorage.removeItem("token");

    this._service.login(usuario, password).subscribe(
      (res) => {
        // Esta API devuelve el JWT en la propiedad `response`.
        const token = res?.response ?? res?.token;

        if (!token) {
          this.mensaje = "La respuesta del servidor no contiene un token válido.";
          return;
        }

        sessionStorage.setItem("token", token);
        this._router.navigate(['/perfil']);
      },
      (error) => {
        this.mensaje = "Credenciales incorrectas. Inténtalo de nuevo.";
      }
    );
  }}
