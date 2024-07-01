import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FlexLayoutServerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apunte';
}
