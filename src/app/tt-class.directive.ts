import { Directive,ElementRef, HostListener, Input, OnInit,HostBinding , Renderer2} from "@angular/core";

@Directive({
    selector:'[ttClass]',
})
export class ttClassDirective implements OnInit {
    @Input() ttClass: string;
    constructor(private el: ElementRef ) {

    }

    @HostBinding('style.color') color:string;
    @HostBinding('style.backgroundColor') bgcolor:string
    @HostListener('click') click() {
        this.color="red"
        this.bgcolor="Blue  "
        alert('the click works ')
    }
   
  

    ngOnInit() {
        this.el.nativeElement.style.color="blue"
        this.el.nativeElement.style.backgroundColor= "Green"
        
    }

}