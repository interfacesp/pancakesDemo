import { Component, OnInit } from '@angular/core';
import { Pancake } from '../pancake';

@Component({
  selector: 'app-pancake-fiche',
  templateUrl: './pancake-fiche.page.html',
  styleUrls: ['./pancake-fiche.page.scss'],
})
export class PancakeFichePage implements OnInit {

  maCrepe: Pancake; 

  constructor() { }

  ngOnInit() {
    

  }

}
