import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [],
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent {
  telegram = inject(TelegramService);
  router = inject(Router);
  constructor()
  {
    this.sendData = this.sendData.bind(this);
    this.goNext = this.goNext.bind(this);
    this.telegram.MainButton.setText('Next');
    this.telegram.MainButton.show();
    this.telegram.MainButton.onClick(this.goNext);
  } 
  
  sendData()
  {
    this.telegram.sendData({text: 'any'});
  }

  goNext()
  {
    this.router.navigate(['/characters']);
  }
}
