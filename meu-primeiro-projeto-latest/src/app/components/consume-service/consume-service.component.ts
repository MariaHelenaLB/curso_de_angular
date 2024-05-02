import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
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
  constructor(
    private _apiService: ApiService
  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.#apiService.name())

    this.#apiService.name$.subscribe({
      next : (next) => console.log(next),
      error : (error) => console.log(error),
      complete : () => console.log("complete!"),    
    })

    setTimeout(() => {
      console.log(this.#apiService.name())
    }, 2000)
  }
}
