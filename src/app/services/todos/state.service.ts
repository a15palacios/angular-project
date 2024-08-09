import { Injectable } from '@angular/core';
import type {Todos}           from  '../../components/todos/todos.types.js'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  todosStateList: Todos[] = [];
  private todosStateSubject = new BehaviorSubject<Todos[]>([]);
  todosState$ = this.todosStateSubject.asObservable();

  constructor() { }

  setTodos(todos: Todos[]){
    // this.todosStateList = todos;
    this.todosStateSubject.next(todos);
    
  }
}
