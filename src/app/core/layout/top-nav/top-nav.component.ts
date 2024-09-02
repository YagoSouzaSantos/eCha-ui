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

  display: boolean = true;
  actionType!: string;
  logoType!: string;

  constructor(private topnavService: TopnavService) { }

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


  toLogin() {
    this.router.navigate(['/login'])
  }
}
