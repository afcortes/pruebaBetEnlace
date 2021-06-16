import { Character } from './../../models/character.model';
import { CharactersService } from './../../service/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {

  characters: Character[];

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe(characters => {
      this.characters = characters['results']
    });

  }

}
