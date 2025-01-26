import { Directive, ElementRef, Input, SimpleChanges, inject } from '@angular/core';

@Directive({ standalone: true, selector: '[textColor]' })
export class TextColorDirective {
  @Input('textColor') theme!: string;

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
        this.el.nativeElement.style.color = '#152B11';
        break;

      case 'red':
        this.el.nativeElement.style.color = '#A30000';
        break;

      case 'blue':
        this.el.nativeElement.style.color = '#041D4F';
        break;

      case 'yellow':
        this.el.nativeElement.style.color = '#d1ae24';
        break;

      case 'purple':
        this.el.nativeElement.style.color = '#461258';
        break;

      case 'orange':
        this.el.nativeElement.style.color = '#e35214';
        break;

      case 'pink':
        this.el.nativeElement.style.color = '#ba56b7';
        break;

      case 'gray':
        this.el.nativeElement.style.color = '#4f4f4f';
        break;

      case 'login':
        this.el.nativeElement.style.color = '#59ba29';
        break;

      default:
        this.el.nativeElement.style.color = '#59ba29';
        break;
    }
  }
}



