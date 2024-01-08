import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { NgFor } from "@angular/common";
import { Quote } from "./quote.model";
import { delay, of } from "rxjs";

@Component({
  selector: 'app-quote',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    {{checkRender()}}
    <span>{{quote.content}} - {{quote.author}} </span>
    <button (click)="updateQuote()">Update Quote</button>
  `,
})
export class QuoteComponent {
  @Input() quote!: Quote;

  checkRender(): void {
    console.log('[QuoteComponent] render');
  }

  updateQuote(): void {
    this.quote.content = "Make 2024 the best of your life!";
  }
}
