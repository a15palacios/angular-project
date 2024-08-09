import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import type {Todos}   from  '../todos/todos.types.js'
import { CommonModule } from '@angular/common';
import { TodosItemComponent } from '../todos-item/todos-item.component';
import { CapitalizePipe } from '../../pipes/capitalize/capitalize.pipe';
import { FilterPipe } from '../../pipes/todos/filter.pipe';
import type {FilterTodos}           from  '../../components/todos/filter.types.js'
import {StateService}   from '../../services/todos/state.service';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, TodosItemComponent, FilterPipe],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent implements OnInit {

  currentTab: FilterTodos = 'all';
  todos: Todos[] = [];

  @Input() todosList: Todos[] = [];
  @Output() buttonDelete= new EventEmitter<number>();
  @Output() buttonComplete= new EventEmitter<Todos>();

  constructor(private stateService: StateService){
    // this.todos = this.stateService.todos;
    // console.log('TODOOOOOOOOs',this.todos)
  }

  ngOnInit(): void {
    this.stateService.todosState$.subscribe(todos => {
      this.todos = todos;
      // debugger
    });
  }

  deleteAction = (id: number) => {
    this.buttonDelete.emit(id);
  }

  completeAction = (todo: Todos) => {
    this.buttonComplete.emit(todo);
  }

  handleTabChange = (filter: FilterTodos) => {
    this.currentTab = filter;
  }

}
