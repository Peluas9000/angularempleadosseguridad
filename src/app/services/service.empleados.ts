import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ServiceEmpleados {
    private urlApi: string = "https://apiempleadoscoreoauth.azurewebsites.net/";

    constructor(private _http: HttpClient) {}

    // 1. Petición para generar y obtener el Token
    async login(usuario: string, password: string): Promise<any> {
        let json = {
            userName: usuario,
            password: password
        };
        return await firstValueFrom(this._http.post(this.urlApi + "Auth/Login", json));
    }

    // 2. Petición SEGURA para ver mi Perfil
    async getPerfilEmpleado(): Promise<any> {
        // Recuperamos el token del servidor (Session Storage)
        let token = sessionStorage.getItem("token");
        // Configuramos los Headers exigidos por la API
        let headers = new HttpHeaders().set("Authorization", "bearer " + token);
        
        return await firstValueFrom(
            this._http.get(this.urlApi + "api/Empleados/PerfilEmpleado", { headers: headers })
        );
    }

    // 3. Petición SEGURA para ver mis Subordinados
    async getSubordinados(): Promise<any> {
        let token = sessionStorage.getItem("token");
        let headers = new HttpHeaders().set("Authorization", "bearer " + token);
        
        return await firstValueFrom(
            this._http.get(this.urlApi + "api/Empleados/Subordinados", { headers: headers })
        );
    }
}