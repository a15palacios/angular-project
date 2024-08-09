import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todos-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos-add.component.html',
  styleUrl: './todos-add.component.scss'
})
export class TodosAddComponent implements OnInit {
  text = '';

  @Input() addTodoText: string = '';
  @Output() buttonCreate= new EventEmitter<string>();

  ngOnInit(): void {
    this.text = this.addTodoText;
  }

  createAction = (text: string) => {
    this.buttonCreate.emit(text);
  }
}
