import { Component, signal } from '@angular/core';

//interface
import { IProjects } from '../../interface/IProjects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    
    {
      src: 'assets/img/vfull.png',
      alt: 'Cursos',
      title: 'Curso de Angular',
      width: '71px',
      height: '51px',
      description: '<p>Aprenda mais sobre Angular</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },

    {
      src: 'assets/img/curso-em-video.png',
      alt: 'Cursos',
      title: 'Curso de HTML5 e CSS3',
      width: '71px',
      height: '51px',
      description: '<p>Aprenda mais sobre HTML5 e CSS3</p>',
      links: [
        {
          name: 'Conheça o Curso em Vídeo',
          href: 'https://www.cursoemvideo.com/cursos/',
        },
      ],
    },

  ]);
}

