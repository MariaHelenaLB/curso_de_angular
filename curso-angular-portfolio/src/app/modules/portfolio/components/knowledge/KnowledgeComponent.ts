import { Component, signal } from '@angular/core';

//Interface
import { IKnowLedge } from '../../interface/IKnowledge.interface';




@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowLedge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'ícone de conhecimento de html5',
    },

    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'ícone de conhecimento de css3',
    },

    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'ícone de conhecimento de javascript',
    },

    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'ícone de conhecimento de angular',
    },

    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'ícone de conhecimento de nodejs',
    },
  ]);
}
