import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Character }    from '../character.types';
import { ColorChangePipe } from '../../../../pipes/color-change.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [ColorChangePipe, CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit {

  characterData: Character = {
    id: 1,
    name: 'string',
    status: 'string',
    species: 'string',
    type: 'string',
    gender: 'string',
    image: 'string',
    episode: ['string'],
    url: 'string',
    created: 'string',
  }

  @Input() character: Character = {
    id: 1,
    name: 'string',
    status: 'string',
    species: 'string',
    type: 'string',
    gender: 'string',
    image: 'string',
    episode: ['string'],
    url: 'string',
    created: 'string',
  };
  @Output() delete = new EventEmitter<number>();

  ngOnInit() {
    this.characterData = this.character;
  }

  deleteCharacter(id: number){
    this.delete.emit(id);
  }

}
