import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private router: Router, private http: HttpClient) {}

  username_input = "";
  puntos = 0;

  asignarpuntos() {
    this.http.post<any>('http://127.0.0.1:8000/api/usuarios/generatepoint/', {
      email: this.username_input,
      puntos: this.puntos
    }).subscribe(
      response => {
        Swal.fire({
          title: "LISTO!",
          text: "Puntos asignados correctamente.",
          icon: "success"
        });
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
