import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // registrationSuccess = false;
  registrationForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
