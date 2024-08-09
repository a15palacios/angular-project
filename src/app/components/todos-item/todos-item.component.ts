import { Component, Input, Output, EventEmitter, OnInit, OnChanges} from '@angular/core';
import type {Todos}   from  '../todos/todos.types.js'
import {StateService}   from '../../services/todos/state.service';

@Component({
  selector: 'app-todos-item',
  standalone: true,
  imports: [],
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.scss'
})
export class TodosItemComponent implements OnInit, OnChanges {
  todos: Todos[] = [];

  @Input() todo: Todos = {id: 0, text: '', completed: false};
  @Output() buttonDelete= new EventEmitter<number>();
  @Output() buttonComplete= new EventEmitter<Todos>();

  constructor(private stateService: StateService){
    
  }

  deleteAction = (id: number) => {
    this.buttonDelete.emit(id);
  }

  completeAction = (todo: Todos) => {
    this.buttonComplete.emit(todo);
  }


  ngOnInit(): void {
    this.stateService.todosState$.subscribe(todos => {
      this.todos = todos;
      // {debugger}
    });

    // console.log('TODOS EN TODOS ITEM: ',this.todos)
  }

  ngOnChanges(){
    this.stateService.todosState$.subscribe(todos => {
      this.todos = todos;
    });
    console.log('TODOS EN TODOS ITEM: ',this.todos)
  }

}
