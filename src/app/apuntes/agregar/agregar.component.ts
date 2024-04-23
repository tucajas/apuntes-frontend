import { Component, OnInit, inject } from '@angular/core';

//importaciones hechas por mi
import { ActivatedRoute, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { switchMap } from 'rxjs';
import { Apunte } from '../../apunte-interface';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import ApunteService from '../../apunte-service.service';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
//import { ApunteService } from '../../apunte-service.service';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    CabeceraComponent,
  ],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css',
})
export default class AgregarComponent implements OnInit {
  Apunte: Apunte = {
    descripcion: '',
    texto: '',
  };
  private _apunteServ = inject(ApunteService);
  private _router = inject(Router);
  private _activateroute = inject(ActivatedRoute);

  ngOnInit(): void {
    this._activateroute.params
      .pipe(switchMap(({ id }) => this._apunteServ.getApunte(id)))
      .subscribe((apunte) => (this.Apunte = apunte));
  }

  guardar(){
    console.log(this.Apunte)
    if (this.Apunte.descripcion.trim().length === 0) {
      return;
    };
    // actualizar
    if (this.Apunte.id) {
      this._apunteServ
        .actualizarApunte(this.Apunte)
        .subscribe((apunte) => console.log('actualizando', apunte));
      this._router.navigate(['listado']);
    } else {
      // crear
      this._apunteServ.agregarApunte(this.Apunte).subscribe((resp) => {
        console.log('respuesta', resp);
        this._router.navigate(['']);
      });
    }
  }

  eliminar(){
    this._apunteServ.borrarApunte(this.Apunte.id!).subscribe((resp) => {
      this._router.navigate(['listado']);
    });
  }
}
