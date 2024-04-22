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
  templateUrl: './loginadmin.component.html',
  styleUrl: './loginadmin.component.css'
})


export class LoginadminComponent {
  constructor(private router: Router, private http: HttpClient) {}

  username_input = "";
  password_input = "";

  iniciarSesion() {
    this.http.post<any>('http://127.0.0.1:8000/api/usuarios/loginadmin/', {
      email: this.username_input,
      password: this.password_input
    }).subscribe(
      response => {
        this.router.navigate(['/admin']);
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
