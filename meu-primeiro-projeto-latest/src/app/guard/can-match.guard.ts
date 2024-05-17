import { CanMatchFn } from '@angular/router';
//canMatché simples. Diz se uma rota corresponde ou não ao URL atual
export const canMatchGuard: CanMatchFn = (route, segments) => {

  return true;
};
