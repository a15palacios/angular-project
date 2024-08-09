import { Injectable } from '@angular/core';
import {HttpClient}           from '@angular/common/http';
import type {Todos}           from  '../../components/todos/todos.types.js'
import {StateService}   from './state.service';


@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  base_url = 'https://jsonplaceholder.typicode.com';

  constructor(private httpService: HttpClient, private stateService: StateService) { 
    console.log('instantiated API SERVICE')
  }

  log(){
    console.log('SERVICE')
  }

  getTodos(): Promise<Todos[]>{
    return new Promise((resolve,reject) => {
      this.httpService.get(`${this.base_url}/todos`)
      .subscribe({
        error: reject, 
        next: (_data: unknown) => {
          console.log(_data);
          const data = _data as {id: number, title: string, completed: boolean}[];

          const todos = data.map(todo => {
            return{
              id: todo.id,
              text: todo.title,
              completed: todo.completed
            }
          });
          resolve(todos)
          // window.localStorage.setItem('todos', JSON.stringify(todos))
          this.stateService.setTodos(todos);
        }
      });
    })
    
  }
}
