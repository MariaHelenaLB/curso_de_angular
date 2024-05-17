import { CanDeactivateFn } from '@angular/router';
import ServicosPrestadosComponent from 'app/pages/servicos-prestados/servicos-prestados.component';
//canDeactivateGuard é usada para determinar se uma navegação deve ser permitida ou não, quando o usuário está tentando sair de uma rota específica.
export const canDeactivateGuard: CanDeactivateFn<ServicosPrestadosComponent> = (component, currentRoute, currentState, nextState) => {

  //console.log(component, currentRoute, currentState, nextState);

  if(component.form.get('name')?.dirty) {
    return confirm('Você deseja sair?');
  }

  return true;
};
