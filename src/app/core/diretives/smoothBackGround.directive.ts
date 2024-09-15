import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ standalone: true, selector: '[smoothBackGround]' })
export class SmoothBackGroundDirective {

  @Input('smoothBackGround') theme!: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.applyThemeColor();
  }

  private applyThemeColor() {
    switch (this.theme) {
      case 'green':
        this.el.nativeElement.style.backgroundColor = '#d6ecb894'; //ok
        break;

      case 'red':
        this.el.nativeElement.style.backgroundColor = '#fcc2c2'; //ok
        break;

      case 'blue':
        this.el.nativeElement.style.backgroundColor = '#c2f2f1'; // ok

        break;

      case 'yellow':
        this.el.nativeElement.style.backgroundColor = '#fcf5c2'; //ok
        break;

      case 'purple':
        this.el.nativeElement.style.backgroundColor = '#dacdf7'; // ok
        break;

      case 'orange':
        this.el.nativeElement.style.backgroundColor = '#fcdcc2'; //ok
        break;

      case 'pink':
        this.el.nativeElement.style.backgroundColor = '#f2bbf0'; //ok
        break;

      case 'gray':
        this.el.nativeElement.style.backgroundColor = '#c9c7c9';
        break;

      default:
        this.el.nativeElement.style.backgroundColor = '#152B11';
        break;
    }
  }

}
