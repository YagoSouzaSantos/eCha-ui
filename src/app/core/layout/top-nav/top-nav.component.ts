import { AuthService } from './../../services/auth.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { TopNavImports } from './config/material';
import { TopnavService } from './services/topnav.service';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [TopNavImports],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss', '/src/styles/colors.scss']
})
export class TopNavComponent implements OnInit {
  private router = inject(Router)
  private topnavService = inject(TopnavService)
  private authService = inject(AuthService)

  display: boolean = true;
  actionType!: string;
  logoType!: string;


  ngOnInit(): void {
    combineLatest([
      this.topnavService.displayBar$,
      this.topnavService.actionType$,
      this.topnavService.logoType$
    ]).subscribe(([display, actionType, logoType]) => {
      this.display = display;
      this.actionType = actionType;
      this.logoType = logoType;
    });

    this.topnavService.configureTopNavBar(true, 'start', 'default');
  }

  logout() {
    this.authService.logout()
  }


}
