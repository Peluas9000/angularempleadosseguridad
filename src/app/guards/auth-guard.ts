import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, MaybeAsync, GuardResult, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    // Aquí irá tu lógica de validación (ej. leer sessionStorage)
    if(sessionStorage.getItem("token")) {
      return true; // Permitir acceso
    } else {
      //Si el usuariono esta autorizado 
      return this._router.createUrlTree(['/login'],
        {queryParams: {returnUrl: state.url}}
      ) // Denegar acceso
    }
  }
  
}