import { Injectable } from '@angular/core';
import { Pancake, PancakeAddOptions } from '../pancake';

@Injectable({
  providedIn: 'root'
})
export class PancakeService {

  public listeCrepes: Pancake[] = []; 

  constructor() { }


  public addPancake(newPancake: PancakeAddOptions){
    //créer un nouvel id pour la pancake
    const newId = this.listeCrepes.length + 1;

    const newCrepe= {
      id: newId,
      name:newPancake.name,
      description: newPancake.descr,
      photo: newPancake.photo
    }

    //ajouter cette pancake dans tableau listeCrepes
    this.listeCrepes.push(newCrepe);


    

  }

}
