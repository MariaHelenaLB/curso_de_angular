import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  public firstName = signal('Maria Helena ');
  public lastName = signal('Lima Barreto');

  public fullName = computed( () => {
    return this.firstName() + this.lastName()
  })

  public array = signal([1]);

  /*
    effect - raramente são necesssários na maioria dos códigos, mas podem ser úteis em circustâncias específicas, exemplo:

      - Registro de dados send exibidos e quando eles mudam, seja para análise ou como ferramenta de depuração

      - Manter os dados sincronizados com o window.localStorage.
      
      - Adicionando comportamento DOM personalizado que não pode ser expresso com sintaxe de modelo.

      - Executar renderização personalizada em um <canvas>, biblioteca de gráficos ou outra biblioteca de UI de terceiros.
  */

  constructor() { 
    effect(() => {
      console.log(this.firstName())
      /*console.log(this.array())*/
    })  
  }

  public updateName() {
      return this.firstName.set("Angela ")
  }

  public updateArray() {
    this.firstName.update(() => {  /* set quando é um valor simples */
      return "Angela"
    })
    
    this.array.update( (oldValue: Array<number>) => {  /* update quando tem valores antigos */
      return [...oldValue, oldValue.length + 1]
    })
  }

}
