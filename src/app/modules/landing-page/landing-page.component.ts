import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LANDING_PAGE } from './imports';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LANDING_PAGE],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {
  @ViewChild('loopTitle') loopTitle!: ElementRef;

  ngAfterViewInit(): void {
    if (!this.loopTitle) {
      console.error('Title não encontrado no DOM');
    }
  }

  clickFindOutMore() {
    if (this.loopTitle) {
      const elementPosition = this.loopTitle.nativeElement.getBoundingClientRect().top + window.scrollY;
      const offset = 75;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    } else {
      console.error('Title não foi inicializado!');
    }
  }

}
