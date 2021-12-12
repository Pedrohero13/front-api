import { Component, OnInit } from '@angular/core';
import { caravanaApi } from '../caravanaApi';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  nombre: string ="";
  email: string ="";
  edad: string ="";
  lema: string ="";
  imagen: string ="";
  goals:caravanaApi[]=[];
  constructor(private _data: ServiceService) { }

  ngOnInit(): void {
  }
  AgregarMeta(){

    var payload = {
      name : this.nombre,
      email : this.email,
      age: this.edad,
      comments: this.lema,
      imagen: "nada.jpg"
    }

    this._data.newGoal(payload)
    .subscribe((data: any) => {
   
      this.goals.push(payload);
      this.nombre='';
      this.email='';
      this.edad='';
      this.lema='';
      this.imagen='';
      
      this._data.changeGoal(this.goals);

   });
  }
}
