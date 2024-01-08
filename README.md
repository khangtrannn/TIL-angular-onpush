# TILAngularOnpush

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

## Object Mutability

## ChangeDetectionStrategy.Onpush and @Input

## Observable

## Async Pipe

## Trigger function inside

## Trigger function outside

## detectChanges() vs markForCheck()

## Side notes
OnPush helps you architect you app better

In Angular, the Change Detection On Push strategy is a performance optimization technique that allows you to limit the scope of change detection by checking only the components that have undergone changes. When a component is set to use OnPush strategy, Angular will only check for changes in the following scenarios:

1. The Input reference changes.
   <hero-component [someInput]="someStream$ | async"></hero-component>
   
   // Will trigger change detection
   this.someValue = {
      ...this.someValue,
      someProperty: 'a new value',
   }

  // Will NOT trigger change detection
  this.someValue.someProperty = 'a new value by object mutability';

  <hero-component [someInput]="someValue"></hero-component>
2. The component fires an event. (A component's event handler has triggered)
   <hero-component (someEvent)="doSomething()"></hero-component>
3. Change detection is explicitly requested for that component or its ancestors.

Why use OnPush in Angular? Not for performance... - Joshua Morony
Trigger change detection manually is kind of workaround because it cracks the Angular change detection contract,
for example, in case ChangeDetectionStrategy.OnPush
The best solution here is reply on the Async pipe. The Async pipe is also kind of cheaty really since it does
basically the same thing behind the scenes by using the change detector ref to trigger change detection
but unlike manually trigger change detection yourself using the Async pipe leads to a more desireable architecture.
And since Angular is doing it behind the scenes themselves you don't need to worry about messing that kind of stuff

Async pipe - which it does by using markForCheck() and then a tick() is triggered, which is going to cause the component to be updated just like detectChanges() would do if we did that manually ourselves. 

```
export class SlideShowComponent {
  currentPhoto$: Observable<Photo> | undefined;

  @Input() set photos(value: Observable<Photo>) {
    this.currentPhotos$ = value.pipe(
      from(photo.reverse()).pipe(
        concatMap((photo) => of(photo).pipe(delay(500))),
      )
    )
  }
}
```

Isn't pushing Observables through Input an antipattern?
I generally agree, most of the time I will use the async pipe to subscribe to the stream and pass synchronous values to the component as an input. Important not to be too dogmatic about these things though, sometimes breaking the "rules" can be beneficial or useful. One argument for passing in an observable as an input is that the input reference won't change so there is going to be less change detection triggered with OnPush - so potential significant performance gains there under the right circumstances. Maybe sometimes it just makes the code easier/cleaner and that's fine too.

Presentational Component

Re-architect our application -> in general it's best to only use the change detector ref as the last resort

this.myForm.updateValueAndValidity();

## Test change detection trick
<button (click)="({})">Test change detection</button>

## Reference
https://blog.angular-university.io/how-does-angular-2-change-detection-really-work/