import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetFocusDirective } from './get-focus.directive';
import { BackgroundDirective } from './directives/background.directive';
import { CounterComponent } from './components/counter/counter.component';
import { TodosComponent } from './components/todos/todos.component';
import {ApiRestService}   from './services/todos/api-rest.service';
import {CharactersComponent}   from './components/rick-morty/characters/characters.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GetFocusDirective, BackgroundDirective, CounterComponent, TodosComponent, CharactersComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnChanges, OnDestroy{
  title = 'ezenit-angular-tareas';
  secondsNow = Math.round(Date.now() / 1000);
  counterStart = 5;

  constructor(private apiService: ApiRestService){

  }

  ngOnInit(){
    this.apiService.log();
    setInterval(() => {
      this.secondsNow = Math.round(Date.now() / 1000);
    }, 1000);
  }

  ngOnChanges(){
    debugger
  }

  ngOnDestroy(){

  }

  smiles = [':)', ';)', ':P'];
}
