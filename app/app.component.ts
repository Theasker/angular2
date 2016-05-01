import {Component} from "angular2/core";

@Component({
    selector: 'my-app',
    template: '<h1>{{greeting}}</h1>'
    
})

export class AppComponent {
    private greeting:string = "Hola funciona";
}