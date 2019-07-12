import { Component } from '@angular/core';

@Component({
    selector: 'second-component',
    templateUrl: './second.component.html'
})

export class SecondComponent {
    title = 'This is my second component'
    inputvalue = '';

    constructor() {
        setTimeout(()=>{
            this.title = 'checking property binding'
        }, 2000)
    }

    clickevent(event: Event){
    // console.log(event);
    this.inputvalue = (<HTMLInputElement> event.target).value; //currect way of doing this 
    // this.inputvalue = event.target.value;
    // console.log(this.inputvalue);
    }
}