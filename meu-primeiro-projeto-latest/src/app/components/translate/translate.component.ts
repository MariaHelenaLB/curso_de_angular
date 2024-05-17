import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TranslateComponent {

}
