import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personas = [];
  constructor(public rest: PersonaService) { }

  ngOnInit() {
    this.getPersonas();
  }

  getPersonas(){
    this.rest.getPersonas()
    .subscribe(res => {
      console.log(res.todasLasPersonas);
      this.personas = res.todasLasPersonas;
    });
    
  }

  test(person:any){
    console.log(person)
  }

}
