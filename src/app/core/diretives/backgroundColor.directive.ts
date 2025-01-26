import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({ standalone: true, selector: '[backgroundColor]' })
export class BackgroundColorDirective {
  @Input('backgroundColor') theme!: string;

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
        this.el.nativeElement.style.backgroundColor = '#59ba29';
        break;

      case 'red':
        this.el.nativeElement.style.backgroundColor = '#FF3E3E';
        break;

      case 'blue':
        this.el.nativeElement.style.backgroundColor = '#539ADC';
        break;

      case 'yellow':
        this.el.nativeElement.style.backgroundColor = '#FCFF61';
        break;

      case 'purple':
        this.el.nativeElement.style.backgroundColor = '#C376FF';
        break;

      case 'orange':
        this.el.nativeElement.style.backgroundColor = '#FFA665';
        break;

      case 'pink':
        this.el.nativeElement.style.backgroundColor = '#F9A5CD';
        break;

      case 'gray':
        this.el.nativeElement.style.backgroundColor = '#828282';
        break;

      default:
        this.el.nativeElement.style.backgroundColor = '#59ba29';
        break;
    }
  }
}



