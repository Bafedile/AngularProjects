import { Directive,OnInit, Renderer2,ElementRef,HostListener ,HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  
 
  @Input()defaultColor:string= 'transparent';
  @Input()highlightColor:string= 'purple';
  @HostBinding('style.backgroundColor')backgroundColor:string=this.defaultColor;
  constructor(private renderer: Renderer2,private elementRef:ElementRef) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    // this.renderer.setStyle(this.elementRef.nativeElement,'color','white');
    // this.renderer.setStyle(this.elementRef.nativeElement,'padding','14px 16px');
  }
  @HostListener('mouseenter')mouseOver(eventData:Event){
    this.backgroundColor = this.highlightColor;
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    this.renderer.setStyle(this.elementRef.nativeElement,'color','white');
    this.renderer.setStyle(this.elementRef.nativeElement,'padding','14px 16px');
  }
  @HostListener('mouseleave')mouseLeave(eventData:Event){
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    this.renderer.setStyle(this.elementRef.nativeElement,'color','black');
    this.renderer.setStyle(this.elementRef.nativeElement,'padding','14px 16px');
  }


}
