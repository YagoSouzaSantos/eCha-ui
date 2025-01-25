import { Directive, ElementRef, Input, SimpleChanges, inject } from '@angular/core';

@Directive({ standalone: true, selector: '[themeColor]' })
export class ThemeColorDirective {
  @Input('themeColor') theme!: string;

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
        this.el.nativeElement.style.backgroundColor = '#152B11';
        break;

      case 'red':
        this.el.nativeElement.style.backgroundColor = '#ad0505';
        break;

      case 'blue':
        this.el.nativeElement.style.backgroundColor = '#041D4F';
        break;

      case 'yellow':
        this.el.nativeElement.style.backgroundColor = '#e0c65c';
        break;

      case 'purple':
        this.el.nativeElement.style.backgroundColor = '#461258';
        break;

      case 'orange':
        this.el.nativeElement.style.backgroundColor = '#e07d53';
        break;

      case 'pink':
        this.el.nativeElement.style.backgroundColor = '#c975c7';
        break;

      case 'gray':
        this.el.nativeElement.style.backgroundColor = '#4f4f4f';
        break;

      case 'login':
        this.el.nativeElement.style.backgroundColor = '#59ba29';
        break;

      default:
        this.el.nativeElement.style.backgroundColor = '#59ba29';
        break;
    }
  }
}



