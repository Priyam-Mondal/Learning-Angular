import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent {
  @Input() counter = 0;
  constructor() {
    console.log('1>constructor');
  }
  ngOnInit() {
    console.log('2>ngOnInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngOnChanges(){
    console.log("value change");
    
  }
}
