import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-loop-title',
  standalone: true,
  imports: [],
  templateUrl: './loop-title.component.html',
  styleUrl: './loop-title.component.scss'
})
export class LoopTitleComponent {

  items: string[] = [
    'sua lista de presentes',
    'seu chá de casa',
    'sua wishlist',
    'seu novo enxoval',
    'seu eChá'
  ];

  currentItem: string = this.items[0];
  private currentIndex: number = 0;
  private intervalId!: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startLoop();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.stopLoop();
    }
  }

  private startLoop(): void {
    this.intervalId = setInterval(() => {
      this.updateCurrentItem();
    }, 3000);
  }

  private stopLoop(): void {
    clearInterval(this.intervalId);
  }

  private updateCurrentItem(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.currentItem = this.items[this.currentIndex];
  }
}
