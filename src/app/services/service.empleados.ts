import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, map, Observable } from 'rxjs';
import { Login } from '../models/login';

export interface Empleado {
    idEmpleado: number;
    apellido: string;
    oficio: string;
    salario: number;
    director: number;
}

@Injectable()
export class ServiceEmpleados {
    private urlApi: string = "https://apiempleadoscoreoauth.azurewebsites.net/";

    constructor(private _http: HttpClient) {}

    async loginEmpleadoAsync(user:Login) :Promise<any> {
        let request="auth/login";
        let json=JSON.stringify (user);

        let header =new HttpHeaders().set("content-Type", "application/json");
        return firstValueFrom(
            this._http.post(this.urlApi+request,json,{headers:header}));
    }

    async getEmpleadosAsync(): Promise<Empleado> {
        let request="/api/Empleados/PerfilEmpleado";
        let token=sessionStorage.getItem("token");
        let header =new HttpHeaders().set("content-Type", "application/json").set("Authorization","Bearer "+token);
        return firstValueFrom(
            this._http.get<Empleado>(this.urlApi+request,{headers:header}));
    }

    async getSubordinadosAsync(): Promise<Empleado[]> {
        let request="api/Empleados/subordinados";
        let token=sessionStorage.getItem("token");
        let header =new HttpHeaders().set("content-Type", "application/json").set("Authorization","Bearer "+token);
        return firstValueFrom(
            this._http.get<Empleado[]>(this.urlApi+request,{headers:header}));
    }   
}

    
