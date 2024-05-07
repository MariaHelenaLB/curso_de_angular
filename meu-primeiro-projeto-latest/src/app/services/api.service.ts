import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';

//rxjs
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';

interface ITask {
  id: String;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //novo
  public name = signal('Maria Helena');

  //antigo
  public name$ = new BehaviorSubject('Maria Helena $');

  #http = inject(HttpClient);
  #url = signal(environment.apiTask);

  #setListTask = signal<ITask[] | null>(null);
  public getListTask = this.#setListTask.asReadonly();

  public httpListTask$(): Observable<ITask[]> {
    return this.#http
    .get<ITask[]>(this.#url())
    .pipe(tap((res) => this.#setListTask.set(res)));
  }
}
