import { Pipe, PipeTransform } from '@angular/core';
import type {Todos}           from  '../../components/todos/todos.types.js'
import type {FilterTodos}           from  '../../components/todos/filter.types.js'

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todos[], filter: FilterTodos): Todos[] {
    if(filter === 'all'){
      return todos;
    }
    if(filter === 'completed'){
      return todos.filter(todo => todo.completed)
    }
    if(filter === 'uncompleted'){
      return todos.filter(todo => !todo.completed)
    }

    return todos;
  }

}
