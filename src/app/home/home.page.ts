import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pancake} from '../pancake';
import { PancakeService } from '../services/pancake.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  mesCrepes: Pancake[]; 

  constructor(private router: Router,
              private pancakeService: PancakeService) {
  }

  ngOnInit() {
    this.mesCrepes= this.pancakeService.newListeCrepes;
    
  }

  createNew(){
    this.router.navigateByUrl("/creation");
  }

}
