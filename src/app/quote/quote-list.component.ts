import { NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit, inject } from "@angular/core";
import { QuoteService } from "./quote.service";
import { Quote } from "./quote.model";
import { QuoteComponent } from "./quote.component";
import { delay, of } from "rxjs";

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [NgFor, QuoteComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- <ul>
      <li *ngFor="let quote of quotes">
        <app-quote [quote]="quote"></app-quote>
      </li>
      <hr>
      <button (click)="doSomeStuff()">Do Some Stuff</button>
      <button (click)="loadAnotherQuotes()">Load another quotes</button>
    </ul> -->

    {{test}}
    {{checkRender()}}
  `
})
export class QuoteListComponent implements OnInit {
  #quoteService = inject(QuoteService);
  quotes: Quote[] = [];

  test = 'Test value';

  ngOnInit(): void {
    this.#quoteService.quotes$.subscribe((quotes) => {
      console.log('[Quotes]', quotes);
      this.quotes = quotes;
    });

    this.test = 'Update test value!';

    of(null).pipe(delay(2000)).subscribe(() => {
      this.test = 'Update test value after delay';
    })
  }

  checkRender(): void {
    console.log('[QuoteListComponent] render')
  }

  loadAnotherQuotes(): void {
    this.#quoteService.loadQuotes().subscribe();
  }

  doSomeStuff(): void {
    console.log('[AppComponent] do some stuff');
  }
}