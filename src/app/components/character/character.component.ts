import { Character } from './../../models/character.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character: Character;

  constructor() { }
  ngOnInit(): void {
  }

}
