import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TelegramService } from './services/telegram.service';
import { ProfileService } from './services/profile.service';
import { Character } from './interfaces/character_interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent {
  telegram = inject(TelegramService)
  profileService = inject(ProfileService)
  profiles: Character[] = []

  constructor() {
    this.telegram.ready();
    this.profileService.getTestAccounts().subscribe( val => {this.profiles = val})
  }

}