import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //novo
  public name = signal('Maria Helena');
  
  //antigo
  public name$ = new BehaviorSubject('Maria Helena $');
  
  constructor() { }
}
