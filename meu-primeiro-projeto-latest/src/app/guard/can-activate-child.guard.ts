import { CanActivateChildFn } from '@angular/router';

export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {

  //console.log(childRoute, state);

  return true;
};
