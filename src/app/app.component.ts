import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faUser = faUser;
  faAddressCard = faAddressCard;
  faLock = faLock;



  colorsFirst = "green";
  colorsSecond = "white";
  colorsLast = "white";


  coloriconF = "white";
  coloriconS = "black";
  coloriconL = "black";

  getStyleFirst() {
    return {
      background: this.colorsFirst,
      color: this.coloriconF

    }
  }
  getStyleSecond() {
    return {
      background: this.colorsSecond,
      color: this.coloriconS
    }
  }
  getStyleLast() {
    return {
      background: this.colorsLast,
      color: this.coloriconL
    }
  }

  setStyle(position: number){
    switch(position){
      case 0: 
      this.colorsFirst = "green";
      this.coloriconF = "white";

      this.colorsSecond = "white";
      this.coloriconS = "black";

      this.colorsLast = "white";
      this.coloriconL = "black";

      break;

      case 1:
        this.colorsSecond = "green";
        this.coloriconS = "white";

        this.colorsLast = "white";
        this.coloriconL = "black";

        this.colorsFirst = "white";
        this.coloriconF = "black";

        break;
      
      case 2:
        this.colorsLast = "green";
        this.coloriconL = "white";

        this.colorsSecond = "white";
        this.coloriconS = "black";

        this.colorsFirst = "white";
        this.coloriconF = "black";

        break;


        default:
          console.log("error");
          break;
    }
  }


}
