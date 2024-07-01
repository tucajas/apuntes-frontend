
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export default class AuthComponent {

  email: string | undefined;
  password: string | undefined;
  
  constructor(private http: HttpClient) {}
  
  login() {
      const userData = { email: this.email, password: this.password };
      this.http.post<any>('http://localhost:8000/api/login/', userData)
          .subscribe(
              response => {
                  console.log(response);
                  // Manejar la respuesta del backend, redirigir, etc.
              },
              error => {
                  console.log(error);
                  // Manejar errores
              }
          );
  }
}




