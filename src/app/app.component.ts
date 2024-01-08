import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { Quote } from './quote/quote.model';
import { QuoteService } from './quote/quote.service';
import { QuoteListComponent } from './quote/quote-list.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { HeroComponent } from './hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, QuoteListComponent, NewsletterComponent, HeroComponent],
  template: `
    <newsletter></newsletter>
    <!-- <app-quote-list></app-quote-list> -->
    <app-hero></app-hero>
    {{checkRender()}}
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TIL-angular-onpush';

  checkRender(): void {
    console.log('[AppComponent] render');
  }
}
