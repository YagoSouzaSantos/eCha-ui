import { Component, OnInit } from '@angular/core';
import { TopNavComponent } from "../../core/layout/top-nav/top-nav.component";
import { FooterComponent } from "../../core/layout/footer/footer.component";
import { TopnavService } from '../../core/layout/top-nav/services/topnav.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TopNavComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

  constructor(private topnavService: TopnavService) { }

  ngOnInit(): void {
    this.topnavService.configureTopNavBar(true,'start', 'default');
  }



}
