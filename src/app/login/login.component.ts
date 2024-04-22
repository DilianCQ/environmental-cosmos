import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient) {}

  username_input = "";
  password_input = "";

  iniciarSesion() {
    this.http.post<any>('http://127.0.0.1:8000/api/usuarios/login/', {
      email: this.username_input,
      password: this.password_input
    }).subscribe(
      response => {
        localStorage.setItem('email', this.username_input);
        this.router.navigate(['/home']);
      },
      error => {
        Swal.fire({
          title: "Upss!",
          text: "Credenciales incorrectas.",
          icon: "error"
        });
      }
    );
  }

}
