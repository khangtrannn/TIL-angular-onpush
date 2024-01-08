import { NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit, inject } from "@angular/core";
import { QuoteService } from "../services/quote.service";
import { Quote } from "./quote.model";
import { QuoteComponent } from "./quote.component";

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [NgFor, QuoteComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <li *ngFor="let quote of quotes">
        <app-quote [quote]="quote"></app-quote>
      </li>
      <hr>
      <button (click)="doSomeStuff()">Do Some Stuff</button>
      <button (click)="loadAnotherQuotes()">Load another quotes</button>
    </ul>
  `
})
export class QuoteListComponent implements OnInit {
  #quoteService = inject(QuoteService);
  quotes: Quote[] = [];

  ngOnInit(): void {
    this.#quoteService.quotes$.subscribe((quotes) => {
      console.log('[Quotes]', quotes);
      this.quotes = quotes;
    })
  }

  loadAnotherQuotes(): void {
    this.#quoteService.loadQuotes().subscribe();
  }

  doSomeStuff(): void {
    console.log('[AppComponent] do some stuff');
  }
}