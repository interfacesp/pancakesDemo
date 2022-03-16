import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserPhoto } from '../pancake';
import { PancakeService } from '../services/pancake.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.page.html',
  styleUrls: ['./creation.page.scss'],
})
export class CreationPage implements OnInit {

  myPhoto: UserPhoto; 
  

  constructor(private photoService: PhotoService,
              private pancakeService: PancakeService) { }

  ngOnInit() {
  }


  async onAddPicture(){
    // alert("photo");
    this.myPhoto= await this.photoService.getNewPhoto();
  }

  onAddPancake(submittedForm: NgForm){
    
    if(submittedForm.valid){
        //
        this.pancakeService.addPancake(
            {
              name: submittedForm.value.leNom, 
              descr: submittedForm.value.descr,
              photo: this.myPhoto
            }
        )

    }else {
        alert("Le nom et la description sont obligatoires!");
    }


  }

}
