import { Component, signal } from '@angular/core';

//interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedora de Sistema',
        p: 'ABC Technology | Mar 2024 - Present',
      },
      text: '<p>Comecei a atuar como desenvolvedora de sistema na ABC Technology no dia 19/03/2024.</p>',
    },
  ]);
}
