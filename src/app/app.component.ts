import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  user = {
    name: 'Glenn D. Matarlo',
    course: 'BSIT',
    address: 'Cabulijan, Tubigon, Bohol',
    subject:[
      'Math',
      'English',
      'Filipino',
      'Science',
      'Values'
    ]
  };

}
