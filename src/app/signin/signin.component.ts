import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'dg-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  type = 'patient';
  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
