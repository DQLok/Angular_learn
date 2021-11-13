import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {

  constructor(private ele:ElementRef, private render:Renderer2) { } //ElementRef thư viện lấy thuộc tính của thẻ div làm việc
                                                                    //Renderer2 == ElementRef
  @HostListener('mouseenter') eventHover():void { // lắng nghe sự kiện trên page
    this.ele.nativeElement.style.backgroundColor = 'red';
  }
  // @HostListener('mouseleave') eventHover1():void {
  //   this.ele.nativeElement.style.backgroundColor = 'green';
  // }
  @HostListener('mouseleave') eventLeave():void {
    const divChild = this.render.createElement('div');
    this.render.setStyle(divChild,'background-color','purple');
    this.render.setStyle(divChild,'height','30px');
    this.render.appendChild(this.ele.nativeElement,divChild);
    this.render.setStyle(this.ele.nativeElement,'color','yellow');
  }
}
