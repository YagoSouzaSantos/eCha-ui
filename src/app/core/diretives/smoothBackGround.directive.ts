import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({ standalone: true, selector: '[smoothBackGround]' })
export class SmoothBackGroundDirective {

  @Input('smoothBackGround') theme!: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.transition = 'background-color 0.8s ease';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['theme']) {
      this.applyThemeColor();
    }
  }

  private applyThemeColor() {
    switch (this.theme) {
      case 'green':
        this.el.nativeElement.style.backgroundColor = '#d6ecb894';
        this.el.nativeElement.style.color = '#152B11';
        break;

      case 'red':
        this.el.nativeElement.style.backgroundColor = '#fcc2c2';
        break;

      case 'blue':
        this.el.nativeElement.style.backgroundColor = '#c2f2f1';

        break;

      case 'yellow':
        this.el.nativeElement.style.backgroundColor = '#fcf5c2';
        break;

      case 'purple':
        this.el.nativeElement.style.backgroundColor = '#dacdf7';
        break;

      case 'orange':
        this.el.nativeElement.style.backgroundColor = '#fcdcc2';
        break;

      case 'pink':
        this.el.nativeElement.style.backgroundColor = '#f2bbf0';
        break;

      case 'gray':
        this.el.nativeElement.style.backgroundColor = '#c9c9c9';
        break;

      default:
        this.el.nativeElement.style.backgroundColor = '#d6ecb894';
        break;
    }
  }

}
