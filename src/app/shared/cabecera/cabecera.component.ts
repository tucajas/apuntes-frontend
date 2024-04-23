import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [MatToolbarModule,RouterLink,RouterOutlet,MatIconModule,MatListModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

}
