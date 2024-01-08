import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  constructor() {}

  subscribe(email: string) {
    console.log(email);
  }
}
