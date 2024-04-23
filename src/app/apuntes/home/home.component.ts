import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet,Router } from '@angular/router';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from '../../shared/menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CabeceraComponent,MatCardModule,MenuComponent,FlexLayoutModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export default class HomeComponent {
  private _router = inject(Router);
  
  listado(){
    this._router.navigate(['listado']);
  }
  agregar(){
    this._router.navigate(['agregar']);
  }
}
