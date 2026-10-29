import { Injectable, signal } from "@angular/core";
import { Empleado, ServiceEmpleados } from "./service.empleados";

@Injectable()
export class ServiceAuthEmpleados{

    constructor(private _service:ServiceEmpleados){

    }

    public user =signal<Empleado|null>(null);

    async almacenarEmpleado(token:string):Promise<void>{
        sessionStorage.setItem("token",token);
        let empleado=await this._service.getEmpleadosAsync();
        this.user.set(empleado);
    }

    logOutEmpleado():void{
        sessionStorage.removeItem("token");
        this.user.set(null);
    }


}