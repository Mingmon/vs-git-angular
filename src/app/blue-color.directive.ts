import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColorDirective {

  constructor(element : ElementRef) {
    element.nativeElement.style.color = "blue";
   }
  
    //alert
   /*@HostListener('click') doSomething(){
     alert('Mingmonmumi!');   
   }


    //event
   @HostListener('mouseenter') doSomething(){
    console.log('mouse just entered');
  }
  
    @HostListener('mouseleave') doSomethingElse(){
    console.log('mouse just left the element');
  }

  @HostListener('mousemove') doSomethingElseElse(){
    console.log('mouse just entered');
  }*/


    //mouseevent
    //@HostListener('target:event',['argument'])
  /*@HostListener('document:click',['$event'])
  elemClicked(elem){
    console.log('clicked',elem);*/

}
