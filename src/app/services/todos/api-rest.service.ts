import { Injectable } from '@angular/core';
import {HttpClient}           from '@angular/common/http';
import type {Todos}           from  '../../components/todos/todos.types.js'
import {StateService}   from './state.service';
import { Observable }     from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  base_url = 'https://jsonplaceholder.typicode.com';
  todos: Todos[] = [];

  constructor(private httpService: HttpClient, private stateService: StateService) { 
    console.log('instantiated API SERVICE')
  }

  log(){
    console.log('SERVICE')
  }

  async getTodo(id: number): Promise<Todos>{
    const todos: Todos[] =   await this.getTodos();

    const todo: Todos | any  = todos.find(todo => todo.id === id);

    return todo;
  }

  getTodos(id?: number): Promise<Todos[]>{
    return new Promise((resolve,reject) => {
      this.httpService.get(`${this.base_url}/todos`)
      .subscribe({
        error: reject, 
        next: (_data: unknown) => {
          const data = _data as {id: number, title: string, completed: boolean}[];
debugger
          const todos = data.map(todo => {
            // if(!!id){
            //   return{
            //     id: todo.id,
            //     text: 'DELETED',
            //     completed: todo.completed
            //   }
            // }
            
            return{
              id: todo.id,
              text: todo.title,
              completed: todo.completed
            }
            
          });
          resolve(todos)
          // window.localStorage.setItem('todos', JSON.stringify(todos))
          this.stateService.setTodos(todos);
          this.todos = todos;
        }
      });
    })
    
  }
}
