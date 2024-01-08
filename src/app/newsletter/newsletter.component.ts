import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NewsletterService } from './newsletter.service';
import { UserService } from './user.service';

@Component({
  selector: 'newsletter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
   <fieldset class="newsletter">
        <legend>{{newsletter}}</legend>
        <h5>Hello {{firstName}}, enter your email below to subscribe:</h5> 
    
        <form>
            <input #email type="email" name="email" placeholder="Enter your Email" >
            <input  type="button" class="button button-primary" value="Subscribe"
                    (click)="subscribeToNewsletter(email.value)">
        </form>
    </fieldset>
  `,
  imports: [CommonModule],
})
export class NewsletterComponent implements OnInit {
  newsletter = 'Newsletter';
  firstName = 'Foo';

  constructor(
    private newsletterService: NewsletterService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.user$.subscribe((user) => {
      this.firstName = user.firstName;
    });
  }

  changeNewsletter(): void {
    this.newsletter = 'Universal Newsletter';
  }

  subscribeToNewsletter(email: string) {
    this.newsletterService.subscribe(email);
  }
}
