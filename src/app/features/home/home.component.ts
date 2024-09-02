import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { TopnavService } from '../../core/layout/top-nav/services/topnav.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatGridListModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '/src/styles/colors.scss']
})
export class HomeComponent implements OnInit {
  bgThemeColor: string = 'green';

  constructor(private topnavService: TopnavService) { }

  ngOnInit(): void {
    this.topnavService.configureTopNavBar(true, 'home', 'white');
  }

}
