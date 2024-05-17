import { CanActivateChildFn } from '@angular/router';
//CanActivateChild é usado para proteger rotas filhas
export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {

  //console.log(childRoute, state);

  return true;
};
