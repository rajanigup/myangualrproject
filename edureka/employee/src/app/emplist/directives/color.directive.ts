import { Directive,ElementRef,HostListener } from '@angular/core'

@Directive({
  selector: '[defColOnEvent]',
})
export class DefaultColorOnEventDirective {
  constructor(private elRef:ElementRef) {
   // this.elRef.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('');
  }


  private changeColor(color:string) {
  this.elRef.nativeElement.style.backgroundColor=color;
  }
}

