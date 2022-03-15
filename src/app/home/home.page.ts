import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pancake, listeCrepes} from '../pancake';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mesCrepes: Pancake[]; 

  constructor(private router: Router) {
    this.mesCrepes= listeCrepes.slice();
  }

  createNew(){
    this.router.navigateByUrl("/creation");
  }

}
