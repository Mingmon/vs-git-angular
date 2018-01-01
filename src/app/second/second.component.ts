import {Component } from '@angular/core'
import {ActivatedRoute,Params} from '@angular/router'
@Component({
    selector: 'second-component',
    templateUrl: './second.component.html',
    styleUrls: ['../app.component.scss']
})

export class secondComponent{
    wut : string = "hello wut";
    constructor(private route : ActivatedRoute){}
    firstUser : string;
    secondUser : string;
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    
        this.route.queryParams.subscribe((param : Params) =>{
            if(param['user']){
                this.firstUser = param['user'];
                console.log(this.firstUser);
            }
        });
    }
}