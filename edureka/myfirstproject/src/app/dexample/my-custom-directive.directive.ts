import { Directive ,ElementRef, HostListener,Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]'
})
export class MyCustomDirectiveDirective {
  constructor(private MyElementRef: ElementRef,private myRender:Renderer2) { }
  @HostListener('mouseenter')onmouseenter(){
    alert(1)
    let mya = this.MyElementRef.nativeElement;
    mya.style.backgrounColor='red'
  }
  @HostListener('mouseleave')onmouseleave(){
    let myb =  this.MyElementRef.nativeElement;
    myb.style.backgrounColor='green'
    this.myRender.setStyle(myb,'back-ground-color','green')
  }
}
