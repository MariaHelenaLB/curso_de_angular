import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';

//rxjs
import { BehaviorSubject, Observable, catchError, shareReplay, tap, throwError } from 'rxjs';

interface ITasks {
  id: string;
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

  #setListTasksError = signal<ITasks[] | null>(null);
  get getListTasksError() {
    return this.#setListTasksError.asReadonly();
  }
  public httpListTasks$(): Observable<ITasks[]> {
    this.#setListTasks.set(null);
    this.#setListTasksError.set(null);
    return this.#http.get<ITasks[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setListTasks.set(res)),
      catchError((error: HttpErrorResponse) => {
        this.#setListTasksError.set(error.error.message);
        return throwError(() => error);
      })
    );
  }

  #setTasksId = signal<ITasks | null>(null);
  get getTasksId() {
    return this.#setTasksId.asReadonly();
  }

  #setTasksIdError = signal<ITasks | null>(null);
  get getTasksIdError() {
    return this.#setTasksIdError.asReadonly();
  }
  public httpTasksId$(id: string): Observable<ITasks> {
    this.#setTasksId.set(null)
    this.#setTasksIdError.set(null)
    console.log(`${this.#url()}${id}`);
    return this.#http.get<ITasks>(`${this.#url()}${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setTasksId.set(res)),
      catchError((error: HttpErrorResponse) => {
        this.#setTasksIdError.set(error.error.message);
        return throwError(() => error);
      })
    );
  }

  #setTasksCreateError = signal<ITasks | null>(null);
  get getTasksCreateError() {
    return this.#setTasksCreateError.asReadonly();
  }
  public httpTasksCreate$(title: string): Observable<ITasks> {
    this.#setTasksCreateError.set(null);
    return this.#http.post<ITasks>(this.#url(), { title }).pipe(
      shareReplay(),
      catchError((error: HttpErrorResponse) => {
        this.#setTasksCreateError.set(error.error.message);
        return throwError(() => error);
      })
    );
  }

  #setTasksUpdateError = signal<ITasks | null>(null);
  get getTasksUpdateError() {
    return this.#setTasksUpdateError.asReadonly();
  }
  public httpTasksUpdate$(id: string, title: string): Observable<void> {
    this.#setTasksUpdateError.set(null);
    return this.#http.patch<void>(`${this.#url()}${id}`, { title }).pipe(
      shareReplay(),
      catchError((error: HttpErrorResponse) => {
        this.#setTasksUpdateError.set(error.error.message);
        return throwError(() => error);
      })
    );
  }

  #setTasksDeleteError = signal<ITasks | null>(null);
  get getTasksDeleteError() {
    return this.#setTasksUpdateError.asReadonly();
  }
  public httpTasksDelete$(id: string): Observable<void> {
    this.#setTasksDeleteError.set(null);
    return this.#http.delete<void>(`${this.#url()}${id}`, {}).pipe(
      shareReplay(),
      catchError((error: HttpErrorResponse) => {
        this.#setTasksDeleteError.set(error.error.message);
        return throwError(() => error);
      })
    );
  }
}