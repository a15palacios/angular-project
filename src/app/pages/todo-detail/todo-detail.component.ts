import { Component, OnInit } from '@angular/core';
import type {Todos}   from  '../../components/todos/todos.types.js'
import {ApiRestService}   from '../../services/todos/api-rest.service';
import {ActivatedRoute}   from '@angular/router';


@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.scss'
})
export class TodoDetailComponent implements OnInit{
  todos: Todos[] = [];
  todo: Todos = {id: 1, text: '', completed: false};
  id?: number;

  constructor(private apiRestService: ApiRestService, private activatedRoute: ActivatedRoute){
    
  }

  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });

    this.todo = await this.apiRestService.getTodo(Number(this.id));
    // this.todos = await this.apiRestService.getTodos();
  }

  handleComplete(){

  }

  async handleDelete(id: number): Promise<Todos[]>{
    const index = this.apiRestService.todos.findIndex(todo => todo.id === id);
    console.log('all todos not removed', this.apiRestService.todos)
    // console.log('removed todo',this.apiRestService.todos.splice(index,1));
    this.apiRestService.todos.splice(index,1);
    console.log('all todos removed', this.apiRestService.todos)
// debugger
    await this.apiRestService.getTodos(id);
    return this.apiRestService.todos;
  }

}
