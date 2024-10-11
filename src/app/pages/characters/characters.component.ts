import { Component, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})



export class CharactersComponent implements OnInit, OnDestroy {
    characters_dictinary = {
    'Чарли Браун': '#charlibrown',
    'Лайнус': '#linus',
    'Люси': '#lucy'
  };
  constructor(private telegram: TelegramService,
    private router: Router) 
    {this.goBack = this.goBack.bind(this);}

    ngOnDestroy(): void {
      this.telegram.BackButton.offClick(this.goBack);
    }
    ngOnInit(): void {
      this.telegram.BackButton.show();
      this.telegram.BackButton.onClick(this.goBack);
    }

    goBack(): void{
      this.router.navigate(['/']);
    }
}