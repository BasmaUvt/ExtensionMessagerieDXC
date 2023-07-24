import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Effectuer la logique de connexion ici.
    console.log('Email:', this.email);
    console.log('Mot de passe:', this.password);
  }
}