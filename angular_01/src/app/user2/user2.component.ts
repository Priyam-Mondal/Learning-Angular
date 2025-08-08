import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user2',
  imports: [],
  templateUrl: './user2.component.html',
  styleUrl: './user2.component.css',
})
export class User2Component {
  @Output() getUsers: EventEmitter<string[]> = new EventEmitter<string[]>();

  sampleData:string[] = ['Anil', 'Peter', 'Sam'];

  ngOnInit() {
    this.getUsers.emit(this.sampleData);
  }
}
