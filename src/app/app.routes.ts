import { Routes } from '@angular/router';
import { TypeComponent } from './pages/type/type.component';
import { CharactersComponent } from './pages/characters/characters.component';


export const routes: Routes = [
  { path: '', component: TypeComponent, pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent }
];