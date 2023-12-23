import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';
  menuState = true; // false - Short side menu, true - wide side menu 


  changeSideMenuState(){
    console.log("HERE");
    console.log(this.menuState);
    this.menuState = !this.menuState;
  }
}
