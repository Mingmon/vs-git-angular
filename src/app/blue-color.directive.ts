import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColorDirective {

  constructor(element : ElementRef) {
    element.nativeElement.style.color = "blue";
   }
  
   /*@HostListener('click') doSomething(){
     alert('Mingmonmumi!');
   }*/

   @HostListener('mouseenter') doSomething(){
    console.log('mouse just entered');
  }
  
    @HostListener('mouseleave') doSomethingElse(){
    console.log('mouse just left the element');
  }

  @HostListener('mousemove') doSomethingElseElse(){
    console.log('mouse just entered');
  }
}
