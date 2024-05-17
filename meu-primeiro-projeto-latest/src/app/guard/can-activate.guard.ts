import { CanActivateFn } from '@angular/router';
//CanActivate é usado para proteger rotas principais
export const canActivateGuard: CanActivateFn = (route, state) => {

  //console.log(route, state);

  return true;
};
