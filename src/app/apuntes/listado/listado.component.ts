
import {Component, OnInit, inject} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import ApunteService from '../../apunte-service.service';
import { RouterLink } from '@angular/router';
import { CabeceraComponent } from '../../shared/cabecera/cabecera.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule,RouterLink,CabeceraComponent,FlexLayoutModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})


export default class ListadoComponent  implements OnInit{

  dataSource : any;
  displayedColumns: string[] = ['descripcion', 'texto','editar'];

  private _servicio = inject(ApunteService);

  ngOnInit(): void {
    this._servicio.getApuntes().subscribe((resp)=>{this.dataSource = new MatTableDataSource(resp);})
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
