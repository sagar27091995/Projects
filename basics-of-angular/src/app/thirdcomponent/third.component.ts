import { Component } from '@angular/core';

@Component({
    selector: 'third-component',
    templateUrl: './third.component.html',
    styleUrls: ['./third.component.css']
})

export class ThridComponent {

    ngIfbtn = false;

    constructor(){

    }

    toggle(){
        this.ngIfbtn = true;
    }

    getColor(){
        return 'yellow';
    }
}