import { TopnavService } from './../../core/layout/top-nav/services/topnav.service';
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(private topnavService: TopnavService) {  }

  ngOnInit(): void {
    this.topnavService.setMyBoolean(false);
  }

}
