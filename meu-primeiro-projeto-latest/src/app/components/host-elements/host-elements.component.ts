import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
  host: {
    role: 'button',
    '[attr.class]': 'class',
    '(document:keypress)': 'updateHostListener($event)',
  },
})
export class HostElementsComponent {
  public class = 'vidafullstack';
  public updateHostListener(envet: KeyboardEvent) {
    console.log(envet);
  }
}
