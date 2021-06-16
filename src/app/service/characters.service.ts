import { Observable } from 'rxjs';
import { environment as env } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';



@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) {

  }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(env.URL_API);
  }

}
