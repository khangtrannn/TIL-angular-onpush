import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, delay, of, switchMap } from 'rxjs';
import { User } from './user.model';

const ANONYMOUS_USER: User = {
  firstName: 'ANONYMOUS_USER',
  lastName: '',
};

@Injectable({ providedIn: 'root' })
export class UserService {
  // private subject = new BehaviorSubject<User>(ANONYMOUS_USER);
  private subject = new Subject<User>();
  user$: Observable<User> = this.subject.asObservable();

  constructor() {
    this.subject.next(ANONYMOUS_USER);
  }

  loadUser(user: User) {
    this.subject.next(user);
  }
}
