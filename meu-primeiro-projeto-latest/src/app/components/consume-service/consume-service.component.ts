import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { NewComponent } from '@components/new-component/new-component.component';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit {

  #apiService = inject(ApiService);

  public getTask = signal<null | Array<{
    id: String; 
  title:string;
  }>>(null);


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.#apiService.httpListTask$().subscribe({
      next: (next) => {
        console.log(next)
        this.getTask.set(next)
      },
      error: (error) => console.log(error),
      complete: () => console.log('complete!'),
    });   
  }
}
