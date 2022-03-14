import { Component } from '@angular/core';
import { Pancake, listeCrepes} from '../pancake';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mesCrepes: Pancake[]; 

  constructor() {
    this.mesCrepes= listeCrepes.slice();
  }

}
