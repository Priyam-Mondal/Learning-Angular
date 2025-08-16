import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  debounceTime,
  filter,
  fromEvent,
  map,
  Observable,
  shareReplay,
  Subject,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  @ViewChild('search', { static: true })
  search?: ElementRef<HTMLInputElement>;

  typeAheadSub?: Subscription;
  users: any = [];

  ngOnInit() {
    const searchObs = fromEvent(this.search!.nativeElement, 'input').pipe(
      debounceTime(2000),
      filter((inputEvent: any) => inputEvent.target.value != ''),
      switchMap((inputEvent: any) => {
        return ajax(
          `https://api.github.com/search/users?q=${inputEvent.target.value}`
        );
      }),
      map((ajaxResponse: any) => ajaxResponse.response.items)
    );
    // this.typeAheadSub = searchObs.subscribe({
    //   next: (value: any) => {
    //     console.log(value);
    //     this.users = value;

    //   },
    // });

    // observable -> who emits data
    const pizzaObs = new Observable<{
      name: string;
      veg: boolean;
      size: string;
    }>((subscriber) => {
      console.log('Inside observable');

      subscriber.next({ name: 'Panner Pizza', veg: true, size: 'small' });
      // subscriber.next({ name: 'Chicken Pizza', veg: false, size: 'large' });
      subscriber.complete();
    }).pipe(
      tap((pizza) => {
        // side effects
        // if (pizza.size == 'large') {
        //   throw new Error('Large size not available.');
        // }
        console.log('Inside pipe');
      }),
      filter((pizza) => pizza.veg == true),
      map((pizza) => pizza.name)
      // shareReplay()
    );

    // subscriber/observer - who consume the emitted data
    // pizzaObs.subscribe({
    //   next: (value) => console.log(value),
    //   error: (e) => console.log(e),
    //   complete: () => console.log('done eating pizzas'),
    // });
    // pizzaObs.subscribe({
    //   next: (value) => console.log(value),
    //   error: (e) => console.log(e),
    //   complete: () => console.log('done eating pizzas'),
    // });

    // Create a Subject as a bridge
    const pizzaSubject = new Subject<string>();

    // Now multiple subscribers can share the same execution
    pizzaSubject.subscribe({
      next: (value) => console.log('Subscriber A:', value),
      complete: () => console.log('A: done eating pizzas'),
    });

    pizzaSubject.subscribe({
      next: (value) => console.log('Subscriber B:', value),
      complete: () => console.log('B: done eating pizzas'),
    });

    // Connect cold observable to subject
    pizzaObs.subscribe(pizzaSubject);
  }

  ngOnDestroy() {
    if (this.typeAheadSub) {
      this.typeAheadSub.unsubscribe();
    }
  }
}
