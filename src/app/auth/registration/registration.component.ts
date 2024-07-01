import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [MatFormFieldModule,MatButtonModule,FormsModule,MatIconModule,MatCardModule,FlexLayoutModule,MatInputModule,CabeceraComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export default class RegistrationComponent {

  registrarUsuario(form:NgForm){}
}
