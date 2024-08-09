import { Component, OnInit }  from '@angular/core';
import type {Todos}           from  './todos.types.js'
import {FormsModule}          from '@angular/forms';
import { CommonModule }       from '@angular/common';
import { TodosListComponent } from '../todos-list/todos-list.component';
import { TodosAddComponent }  from '../todos-add/todos-add.component';
import {HttpClient}           from '@angular/common/http';
import {ApiRestService}   from '../../services/todos/api-rest.service';
import {StateService}   from '../../services/todos/state.service';
import { CapitalizePipe } from '../../pipes/capitalize/capitalize.pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule, CommonModule, TodosListComponent, TodosAddComponent,CapitalizePipe],
  providers:[],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  addTodoText = '';
  todosList: Todos[] = [];
  today = new Date();

  constructor(private httpService: HttpClient, private apiService: ApiRestService, private stateService: StateService) {
    this.httpService = httpService;
  };

  async ngOnInit(){
    this.apiService.log(); // Llamada al service importado arriba

    const loadedTodos: Todos[] = this.apiService.todos;
    // const data = !!loadedTodos.length ? loadedTodos :  await this.apiService.getTodos();
    const data =  await this.apiService.getTodos();

    this.todosList = data;
    this.stateService.setTodos(data)

    this.stateService.todosState$.subscribe(todos => {
    this.todosList = todos;
  });
   

    // this.httpService.get('https://jsonplaceholder.typicode.com/todos')
    // .toPromise()
    // .then((_data: unknown) => {
    //   const data = _data as {id: number, title: string, completed: boolean}[];

    //   this.todosList = data.map(todo => {
    //     return{
    //       id: todo.id,
    //       text: todo.title,
    //       completed: todo.completed
    //     }
    //   })
    // })
    // .catch(console.error)  // Hasta aqui, forma de hacerlo con promise

    // A partir de aqui, forma de hacerlo con subscribe
    // .subscribe({
      // error: console.error, 
      // complete:console.log, 
      // next: (_data: unknown) => {
      //   console.log(_data);
      //   const data = _data as {id: number, title: string, completed: boolean}[];

      //   this.todosList = data.map(todo => {
      //     return{
      //       id: todo.id,
      //       text: todo.title,
      //       completed: todo.completed
      //     }
      //   })

      // }});
  }

  handleAddTodo(text: string){
    if(!text) return;

    this.todosList.unshift({
      id: Date.now(),
      text: text,
      completed: false
    });
    
    this.addTodoText = '';
  }

  handleComplete(todo: Todos){
    todo.completed = !todo.completed
  }

  handleDelete(id: number){
    const index = this.todosList.findIndex(todo => todo.id === id);
    this.todosList.splice(index,1);
  }

}
