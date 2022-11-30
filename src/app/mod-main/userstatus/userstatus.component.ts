import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userstatus',
  templateUrl: './userstatus.component.html',
  styleUrls: ['./userstatus.component.css']
})
export class UserstatusComponent implements OnInit {
  isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
