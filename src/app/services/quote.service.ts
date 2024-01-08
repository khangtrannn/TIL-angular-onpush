import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, Observable, Subject, tap } from "rxjs";
import { Quote } from "../quote/quote.model";

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private http = inject(HttpClient);
  private subject = new Subject<Quote[]>();
  quotes$ = this.subject.asObservable();

  constructor() {
    this.loadQuotes().subscribe();
  }

  loadQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>('https://api.quotable.io/quotes/random?limit=4').pipe(
      tap(quotes => this.subject.next(quotes)),
    );
  }
}
