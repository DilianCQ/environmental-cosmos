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
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router, private http: HttpClient) { }

  username_input = "";
  password_input = "";
  password_input2 = ""

  register() {
    if (this.password_input2 == this.password_input) {
      this.http.post<any>('http://127.0.0.1:8000/api/usuarios/register/', {
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
            text: "No es posible registrarte.",
            icon: "error"
          });
        }
      );
    }
    else {
      Swal.fire({
        title: "Upss!",
        text: "las contraseñas no coinciden.",
        icon: "error"
      });
    }
  }
}

