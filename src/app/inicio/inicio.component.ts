import { Component, OnInit } from '@angular/core';
import { caravanaApi } from '../caravanaApi';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  itemCount: number=0;
  goals:caravanaApi[]=[];
  constructor(private _data: ServiceService) { }
  

  ngOnInit(): void {
    this.itemCount = this.goals.length;
    
    
    
  }
  

  
    
    

       

}
