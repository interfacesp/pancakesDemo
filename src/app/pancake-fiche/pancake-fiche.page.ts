import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pancake } from '../pancake';
import { PancakeService } from '../services/pancake.service';


@Component({
  selector: 'app-pancake-fiche',
  templateUrl: './pancake-fiche.page.html',
  styleUrls: ['./pancake-fiche.page.scss'],
})
export class PancakeFichePage implements OnInit {

  maCrepe: Pancake; 

  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute,
              private pancakeService: PancakeService) { }

  ngOnInit() {
    
    // http://localhost:8100/pancake-fiche/detail/1

    const paramMap = this.activatedRoute.snapshot.paramMap;
    const idPancake = Number(paramMap.get("id"));

    this.maCrepe = this.pancakeService.newListeCrepes.find(crepe => crepe.id == idPancake);

  }

  retourHome(){
      this.router.navigateByUrl("/home");
  }

}
