import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from "../../core/layout/footer/footer.component";
import { TopNavComponent } from "../../core/layout/top-nav/top-nav.component";
import { BannerComponent } from './components/banner/banner.component';
import { DescriptionComponent } from './components/description/description.component';
import { FindTeaComponent } from './components/find-tea/find-tea.component';
import { LoopTitleComponent } from './components/loop-title/loop-title.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TopNavComponent, FooterComponent, BannerComponent, LoopTitleComponent, DescriptionComponent, FindTeaComponent],
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
