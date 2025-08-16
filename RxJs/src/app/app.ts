import { Component, ElementRef, ViewChild } from '@angular/core';
import { filter, fromEvent, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  @ViewChild('search', { static: true })
  search?: ElementRef<HTMLInputElement>;

  ngOnInit() {
    const searchObs = fromEvent(this.search!.nativeElement, 'input').pipe(
      map((inputEvent: any) => inputEvent?.target.value)
    );
    searchObs.subscribe({
      next: (value: any) => console.log(value),
    });

    // observable -< who emits data
    const pizzaObs = new Observable((subscriber) => {
      subscriber.next({ name: 'Panner Pizza', veg: true, size: 'small' });
      subscriber.next({ name: 'Chicken Pizza', veg: false, size: 'large' });
      subscriber.complete();
    }).pipe(
      tap((pizza: any) => {
        // side effects
        // if (pizza.size == 'large') {
        //   throw new Error('Large size not available.');
        // }
      }),
      filter((pizza: any) => pizza.veg == true),
      map((pizza: any) => pizza.name)
    );

    // subscriber/observer - who consume the emitted data
    // pizzaObs.subscribe({
    //   next: (value) => console.log(value),
    //   error: (e) => console.log(e),
    //   complete: () => console.log('done eating pizzas'),
    // });
  }
}
