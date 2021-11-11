import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  title = 'STUDENT INFORMATION';
  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
  }

}
