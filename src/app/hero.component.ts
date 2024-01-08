import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { delay, of } from "rxjs";

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `{{hero}} <button (click)="triggerChange()">Hero</button> {{checkRender()}}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit {
  hero = 'Batman';

  ngOnInit(): void {
    this.hero = 'Superman';

    of(null).subscribe(() => {
      this.hero = 'Myself';
    });

    of(null).pipe(delay(2000)).subscribe(() => {
      this.hero = 'Myself delay';
    })
  }

  triggerChange(): void {
    console.log('[HeroComponent] Trigger change');
  }

  checkRender(): void {
    console.log('[HeroComponent] Render');
  }
}