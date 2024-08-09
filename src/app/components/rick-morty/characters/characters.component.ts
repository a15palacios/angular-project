import { Component, OnInit, OnDestroy }    from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character }    from './character.types';
import {ApiRestService} from '../../../services/characters/api-rest.service';
import { ColorChangePipe } from '../../../pipes/color-change.pipe';
import { CharacterComponent } from './character/character.component';



@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, ColorChangePipe, CharacterComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit, OnDestroy{
  characters: Character[] = [];
  subscription: any = [];

    constructor(private apiRestService: ApiRestService){
      console.log('constructor 1')
    }

    ngOnInit(){
      console.log('init 2')
      this.subscription = this.apiRestService.getCharacterData().subscribe(response => {
        // debugger
        this.characters = response.results;
      });
    }

    ngOnDestroy(): void {
      console.log('destroy 3')
      this.subscription.unsubscribe();
    }

    deleteCharacter(id: number){
      const index = this.characters.findIndex(character => character.id === id);
      this.characters.splice(index,1);
    }

}
