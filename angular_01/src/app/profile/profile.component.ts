import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  //   template: `<h1>
  //     profile component
  //     <h1></h1>
  //   </h1>`,
  //   styles: `h1{color:green}`,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let name = this.route.snapshot.paramMap.get('name');

    console.log(name);

    // getting common data coming from app.route.ts
    this.route.data.subscribe((data) => {
      console.log(data['greeting']);
    });
  }
}
