import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
departments = [
  'Alta Verapaz, Cobán',
  'Baja Verapaz, Salamá',
  'Chimaltenango, Chimaltenango',
  'Chiquimula, Chiquimula',
  'El Progreso, Guastatoya',
  'Escuintla, Escuintla',
  'Guatemala, Ciudad de Guatemala',
  'Huehuetenango, Huehuetenango',
  'Izabal, Puerto Barrios',
  'Jalapa, Jalapa',
  'Jutiapa, Jutiapa',
  'Petén, Flores',
  'Quetzaltenango, Quetzaltenango',
  'Quiché, Santa Cruz del Quiché',
  'Retalhuleu, Retalhuleu',
  'Sacatepéquez, La Antigua Guatemala',
  'San Marcos, San Marcos',
  'Santa Rosa, Cuilapa',
  'Sololá, Sololá',
  'Suchitepéquez, Mazatenango',
  'Totonicapán, Totonicapán',
  'Zacapa, Zacapa '   
]
  constructor() { }

  ngOnInit() {
  }

}
