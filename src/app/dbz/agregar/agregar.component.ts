import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private DbzService: DbzService) { }


  // La primer linea del if de agregar es una validacion, si nombre esta vacio no hace nada

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.DbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
