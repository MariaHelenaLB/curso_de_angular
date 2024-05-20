import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('move-ball', [

      state('move-left', style({
        transform: 'scale(1) translateX(0) rotate(0deg)',
      })
      ),

      state('move-right', style({
        transform: 'scale(0.7) translateX(300px) rotate(360deg)',
      })
      ),

      //transition('move-left <=> move-right', animate('1s')),
      transition('move-left <=> move-right', animate('1s')),
      transition('* => move-right', animate('5s 1s ease-in-out')),
      transition('* => move-left', animate('1s')),

    ]),
  ],
})
export class AnimationsComponent {

  public moveIn = signal('');

}
