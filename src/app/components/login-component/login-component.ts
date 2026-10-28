import { Component } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  
  public user:any;
  public mensaje!:string;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ) {
    this.mensaje = "";
    // Inicializamos el objeto para el Model Binding
    this.user = {
      userName: "",
      password: ""
    };
  }

  realizarLogin(): void {
    this._service.login(this.user.userName, this.user.password)
      .then((data: any) => {
        // Guardamos el Token en el Session Storage
        sessionStorage.setItem("token", data.token);
        // Redirigimos a la página de Perfil
        this._router.navigate(["/perfil"]);
      })
      .catch((error: any) => {
        this.mensaje = "Usuario o contraseña incorrectos";
      });
  }
}
