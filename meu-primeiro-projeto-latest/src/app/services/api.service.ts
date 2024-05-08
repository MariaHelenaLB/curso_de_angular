import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';

//rxjs
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';

interface ITasks {
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
  #url = signal(environment.apiTasks);

  #setListTasks = signal<ITasks[] | null>(null);
  get getListTasks() {
    return this.#setListTasks.asReadonly();
  }
  public httpListTasks$(): Observable<ITasks[]> {

    return this.#http.get<ITasks[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setListTasks.set(res))
    );
  }

  #setTasksId = signal<ITasks | null>(null);
  get getTasksId() {
    return this.#setTasksId.asReadonly();
  }
  public httpTasksId$(id: string): Observable<ITasks> {
    console.log(`${this.#url()}${id}`);
    return this.#http.get<ITasks>(`${this.#url()}${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setTasksId.set(res))
    );
  }

  #setTasksCreate = signal<ITasks | null>(null);
  get getTasksCreate() {
    return this.#setTasksCreate.asReadonly();
  }
  public httpTasksCreate$(title: string): Observable<ITasks> {
    return this.#http.post<ITasks>(this.#url(), {title}).pipe(
      shareReplay(),
      tap((res) => this.#setTasksCreate.set(res))
    );
  }

  #setTasksUpdate = signal<ITasks | null>(null);
  get getTasksUpdate() {
    return this.#setTasksUpdate.asReadonly();
  }
  public httpTasksUpdate$(id: string, title: string): Observable<ITasks> {
    return this.#http.patch<ITasks>(`${this.#url()}${id}`, {title}).pipe(
      shareReplay(),
      tap((res) => this.#setTasksUpdate.set(res))
    );
  }
}