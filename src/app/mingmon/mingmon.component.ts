import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mingmon',
  templateUrl: './mingmon.component.html',
  styleUrls: ['./mingmon.component.scss']
})
export class MingmonComponent implements OnInit {
  visible = true;
  toggleDiv(){
    this.visible = !this.visible;
  }

  constructor() { }

  ngOnInit() {
  }

}
