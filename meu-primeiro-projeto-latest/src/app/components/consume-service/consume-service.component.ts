import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { NewComponent } from '@components/new-component/new-component.component';
import { ApiService } from 'app/services/api.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsumeServiceComponent implements OnInit {
  #apiService = inject(ApiService);

  public getListTasks = this.#apiService.getListTasks;
  
  public getTasksId = this.#apiService.getTasksId;
  
  public getListTasksError = this.#apiService.getListTasksError
  public getTasksIdError = this.#apiService.getTasksIdError;
  public getTasksCreateError = this.#apiService.getTasksCreateError;
  public getTasksUpdateError = this.#apiService.getTasksUpdateError;
  public getTasksDeleteError = this.#apiService.getTasksDeleteError;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.#apiService.httpListTasks$().subscribe();
    this.#apiService.httpTasksId$('F8aKDWLuHDR4x9oEf2qn').subscribe();
  }

  public httpTasksCreate(title: string) {
    return this.#apiService
      .httpTasksCreate$(title)
      .pipe(concatMap(() => this.#apiService.httpListTasks$()))
      .subscribe();
  }

  public httpTasksUpdate(id: string, title: string) {
    return this.#apiService
      .httpTasksUpdate$(id, title)
      .pipe(concatMap(() => this.#apiService.httpListTasks$()))
      .subscribe();
  }
  
  public httpTasksDelete(id: string) {
    return this.#apiService
      .httpTasksDelete$(id)
      .pipe(concatMap(() => this.#apiService.httpListTasks$()))
      .subscribe();
  }
}
