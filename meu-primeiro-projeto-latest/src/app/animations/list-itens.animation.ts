import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const listItensAnimation = 
trigger('list-itens', [
    transition(':enter', [
      query('li', [
        style({
          background: 'purple',
          transform: 'translateY(100px)',
        }),
        //a animação acontece por estagios
        stagger('700ms', [animate('1s')]),
        /* 
        group([
          animate(
            '1s',
            style({
              background: 'purple',
              transform: 'translateY(0)',
            }),
          ),
        ]),
        */

        /*
        sequence([
          animate(
            '1s',
            style({
              background: 'purple',
            })
          ),
          animate(
            '2s',
            style({
              background: 'blue',
            })
          ),
          animate(
            '7s',
            style({
              background: 'none',
              transform: 'translateY(0)',
            })
          ),
          animate(
            '1s',
            style({
              transform: 'translateY(100px)',
            })
          ),
        ]),
        */
      ]),
    ]),
    transition('* => *', [
      query(':leave', [
        style({
          //opacity: 1 SOMENTE PARA DEMONSTRAR QUE PODEMOS PASSAR OUTROS VALORES
          background: 'red',
        }),
        animate("1s", style({ opacity: 0 })),
      ]),
    ]),
  ])