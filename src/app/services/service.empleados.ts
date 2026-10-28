import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceEmpleados {
    private urlApi: string = "https://apiempleadoscoreoauth.azurewebsites.net/";

    constructor(private _http: HttpClient) {}

    // 1. Petición para loguearse y conseguir el Token
    login(usuario: string, password: string): Observable<any> {
        let json = {
            userName: usuario,
            password: password
        };
        return this._http.post(this.urlApi + "Auth/Login", json);
    }

    // 2. Petición Autorizada para el Perfil
    getPerfilEmpleado(): Observable<any> {
        let token = sessionStorage.getItem("token");
        // Cabecera estricta exigida: "bearer TOKEN"
        let headers = new HttpHeaders().set("Authorization", "bearer " + token);
        return this._http.get(this.urlApi + "api/Empleados/PerfilEmpleado", { headers: headers });
    }

    // 3. Petición Autorizada para los Subordinados
    getSubordinados(): Observable<any> {
        let token = sessionStorage.getItem("token");
        let headers = new HttpHeaders().set("Authorization", "bearer " + token);
        return this._http.get(this.urlApi + "api/Empleados/Subordinados", { headers: headers });
    }
}