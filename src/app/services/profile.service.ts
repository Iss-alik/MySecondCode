import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Character } from '../interfaces/character_interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 http: HttpClient = inject(HttpClient)


  getTestAccounts() {
    return this.http.get<Character[]>('/assets/data/charactes.json')
  }
}
