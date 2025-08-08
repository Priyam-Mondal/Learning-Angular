import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  name: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((x) => {
      console.log(x);
      this.name = x['name'];
    });
  }

  // data coming from parent
  @Input() user1: string = '';
  @Input() user2: string = '';
}
