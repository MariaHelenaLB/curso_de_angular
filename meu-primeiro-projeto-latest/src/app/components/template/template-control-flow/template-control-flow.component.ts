import { Component } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Observable, delay, of } from 'rxjs';

/* CommonModule -> forma antiga*/

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault ], /* Pode substituir tudo pelo CommonModule */
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public isTrue = true;
  public switchCondition = 'B';

  public itens: Array<{ name: string }>= [{ name: 'Maria Helena Lima Barreto' }];
  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));

  public trackByFn(index: number) {
    return index;
  }

  public addNewName(value: string) {
    return this.itens.push({ name: value });
  }
}

