import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent implements OnInit {

  constructor() { }

  faEnvelope = faEnvelope;

  ngOnInit(): void {
  }

}
