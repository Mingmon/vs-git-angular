import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mingmon',
  templateUrl: './mingmon.component.html',
  styleUrls: ['./mingmon.component.scss']
})
export class MingmonComponent implements OnInit {
  visible = true;
  myFavLang = {
      'frontend' : ['html','css','javascript'],
      'backend' : ['nodejs','php','python','ruby']
  }
  toggleDiv(){
    this.visible = !this.visible;
  }
  counter =0;

  constructor() { }

  ngOnInit() {
  }

}
