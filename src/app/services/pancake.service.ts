import { Injectable } from '@angular/core';
import { listeCrepes, Pancake, PancakeAddOptions } from '../pancake';

@Injectable({
  providedIn: 'root'
})
export class PancakeService {

  public newListeCrepes: Pancake[] = listeCrepes.slice(); 

  constructor() { }


  public addPancake(newPancake: PancakeAddOptions){
    //créer un nouvel id pour la pancake
    const newId = this.newListeCrepes.length + 1;

    const newCrepe= {
      id: newId,
      name:newPancake.name,
      description: newPancake.descr,
      photo: newPancake.photo
    }

    //ajouter cette pancake dans tableau listeCrepes
    this.newListeCrepes.push(newCrepe);


    

  }

}
