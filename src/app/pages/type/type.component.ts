import { Component, inject, signal } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { Router } from '@angular/router';
import { StripCardComponent } from '../../common-ui/strip-card/strip-card.component';
import { ProfileService } from '../../services/profile.service';
import { Character } from '../../interfaces/character_interface';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [StripCardComponent],
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent {
  answear = signal('')

  telegram = inject(TelegramService);
  router = inject(Router);
  
  profileService = inject(ProfileService)
  characters: Character[] = []

  constructor()
  {
    this.sendData = this.sendData.bind(this);
    this.telegram.MainButton.setText('Next');
    this.telegram.MainButton.show();
    this.telegram.MainButton.onClick(this.sendData);
    this.profileService.getTestAccounts().subscribe( val => {this.characters = val})
  } 
  
  sendData()
  {
    this.telegram.sendData({text: 'any'});
  }

  handleChange(event) {
    // изменение стейта при изменении textarea
    this.answear.set(event.target.value);
  }
    
}
