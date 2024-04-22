import { Component, OnInit } from '@angular/core';
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
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  userEmail: string | null = null;
  puntos = 0;

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      this.userEmail = localStorage.getItem('email');
      this.get_puntos()
    }
  }

  get_puntos() {
    this.http.post<any>('http://127.0.0.1:8000/api/usuarios/getbyemail/', {
      email: this.userEmail
    }).subscribe(
      response => {
        console.log(response)
        this.puntos = response.puntos
      },
      error => {
        Swal.fire({
          title: "Upss!",
          text: "algo esta pasando con  el back.",
          icon: "error"
        });
      }
    );
  }


}
