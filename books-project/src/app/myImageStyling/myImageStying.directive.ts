import { Directive, ElementRef, Renderer2 , OnInit} from "@angular/core";

@Directive({
    selector: '[myImageStying]'
})
export class MyImageStying implements OnInit{

    constructor(private elementRef:ElementRef,private renderer: Renderer2){

    }

    ngOnInit(){
        this.renderer.setStyle(this.elementRef.nativeElement,'max-width','300px');
        this.renderer.setStyle(this.elementRef.nativeElement,'max-height','400px');
    }
}