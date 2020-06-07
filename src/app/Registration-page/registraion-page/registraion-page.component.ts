import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registraion-page',
  templateUrl: './registraion-page.component.html',
  styleUrls: ['./registraion-page.component.css']
})
export class RegistraionPageComponent implements OnInit {

  constructor() { }

  faUser = faUser;
  faKey = faKey;

  ngOnInit(): void {
  }

}
