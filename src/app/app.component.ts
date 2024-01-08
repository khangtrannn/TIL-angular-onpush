import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { Quote } from './quote/quote.model';
import { QuoteService } from './services/quote.service';
import { QuoteListComponent } from './quote/quote-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, QuoteListComponent],
  template: `<app-quote-list></app-quote-list>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TIL-angular-onpush';
}
