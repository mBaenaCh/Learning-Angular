import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const numAleatorio = Math.random();
    console.log(numAleatorio);
    if(numAleatorio > 0.4){
      console.log("Se pudo ir hacia la ruta");
      return true;
    }else{
      console.log("No se pudo ir hacia la ruta");
      return false;
    }
  }
  
}
