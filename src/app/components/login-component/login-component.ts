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

    this._service.login(usuario, password).subscribe(
      (res) => {
        // Guardamos el token en el servidor (Session Storage)
        sessionStorage.setItem("token", res.response);
        // Redirigimos automáticamente al perfil
        this._router.navigate(['/perfil']);
      },
      (error) => {
        this.mensaje = "Credenciales incorrectas. Inténtalo de nuevo.";
      }
    );
  }}
