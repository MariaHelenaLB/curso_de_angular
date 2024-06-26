import { Component, OnInit, inject } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss',
})
export class NewComponent implements OnInit {
  public name = 'New Component';

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

    this.#apiService.name$.next('MH')

    this.#apiService.name.set('MH $')

    setTimeout(() => {
      console.log(this.#apiService.name())
    }, 2000)
  }
}
