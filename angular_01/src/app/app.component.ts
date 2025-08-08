import {
  afterNextRender,
  afterRender,
  Component,
  computed,
  effect,
  Signal,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Reactiveform01Component } from './reactiveform01/reactiveform01.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { UserComponent } from './user/user.component';
import { User2Component } from './user2/user2.component';
import { CurrencyConverterPipe } from './pipes/currency-converter.pipe';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ProductService } from './services/product.service';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    FormsModule,
    TodoComponent,
    HeaderComponent,
    Reactiveform01Component,
    ReactiveFormsModule,
    TemplatedrivenformComponent,
    UserComponent,
    User2Component,
    CurrencyConverterPipe,
    LifecycleComponent,
    LazyloadingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_01';

  // counter
  count: number = 0;
  handleCounter(val: string) {
    if (val == '-') {
      this.count = this.count - 1;
    } else if (val == '+') {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }

  //events in angular
  handleClick(event: MouseEvent) {
    console.log(event.type);
    console.log((event.target as Element).classList);
  }
  handleEvent(event: any) {
    console.log(event.type);
  }

  // get and set input field value
  name = '';
  email = '';
  getName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.name = name;
  }
  getEmail(email: string) {
    this.email = email;
  }
  setEmail() {
    this.email = 'default@test.com';
  }

  // control flow in html
  display = true;
  toggle() {
    this.display = !this.display;
  }

  color = 0;
  handleColor(color: number) {
    this.color = color;
  }
  handleColorInput(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value);
  }

  // loops
  students = [
    {
      id: 1,
      name: 'Alice Smith',
      age: 20,
      email: 'alice.smith@example.com',
    },
    { id: 2, name: 'Bob Johnson', age: 22, email: 'bob.j@example.com' },
    { id: 3, name: 'Charlie Brown', age: 21, email: 'charlie.b@example.com' },
  ];
  getStudent(name: string) {
    console.log(name);
  }

  // signals
  c = signal(10);
  updateSignal() {
    this.c.set(this.c() + 1);
  }

  // data types with signals
  // writable signal
  data1: WritableSignal<number | string> = signal<number | string>(10);
  data2: WritableSignal<number> = signal(10);

  updateNew() {
    this.data2.update((x) => x + 1);
  }

  //computed signal
  data3: Signal<number> = computed(() => 10);
  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y());
  show() {
    console.log(this.z());
    this.x.set(100);
    console.log(this.z());
  }

  // effect
  userName = 'Jhon';
  // constructor() {
  //   effect(() => {
  //     console.log(this.userName);
  //   });
  // }

  // contextual variables
  users = ['Priyam', 'Jhon', 'Wick'];

  // two way binding
  tb1 = 'Priyam';

  // dynamic style
  color1 = 'red';
  fontsize = '30';
  headingSizeBig = '80px';
  headingSizeSmall = '30px';
  big = false;

  // directives

  show2 = true;
  status = 'success';
  selectedColor = 'red';
  categories = [
    {
      name: 'Fruits',
      items: ['Apple', 'Banana', 'Orange'],
    },
    {
      name: 'Vegetables',
      items: ['Carrot', 'Spinach', 'Potato'],
    },
  ];

  // passing dynamic data from app to user

  user1 = 'Jhon Wick';
  user2 = '';
  onUserChange(user: string) {
    this.user2 = user;
  }

  // data passing from child to parent
  handleChildData(sampleData: string[]) {
    console.log(sampleData);
  }

  // custom pipes
  amount = 10;

  // component lifecycle
  counter2 = 0;
  updateCounter2() {
    this.counter2++;
  }

  @ViewChild('lcComponent') LifecycleComponent: any;
  // constructor() {
  //   afterRender(() => {
  //     console.log('After rerender');
  //   });
  //   afterNextRender(() => {
  //     console.log('After next rerender');
  //   });
  // }

  // service
  constructor(private productService: ProductService) {}

  productData: {
        name: string;
        brand: string;
      }[]
    | undefined;

  getProductData() {
    this.productData = this.productService.getProductData();
    console.log(this.productData);
    
  }
}
