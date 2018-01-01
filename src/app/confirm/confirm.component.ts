import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router'
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  constructor(private route : ActivatedRoute){}
  firstUser : string;
  secondUser : string;

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    this.route.queryParams.subscribe((param : Params) =>{
        if(param['first']){
            this.firstUser = param['first'];
            console.log(this.firstUser);
        }
        if(param['second']){
          this.secondUser = param['second'];
          console.log(this.secondUser);
        }
    });
}
}
