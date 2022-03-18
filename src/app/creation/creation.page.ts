import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyLocation, UserPhoto } from '../pancake';
import { LocationService } from '../services/location.service';
import { PancakeService } from '../services/pancake.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.page.html',
  styleUrls: ['./creation.page.scss'],
})
export class CreationPage implements OnInit {

  myPhoto: UserPhoto; 
  currentLocation: MyLocation;
  

  constructor(private photoService: PhotoService,
              private pancakeService: PancakeService,
              private router: Router,
              private locationService: LocationService) { }

  ngOnInit() {
  }


  async onAddPicture(){
    // alert("photo");
    this.myPhoto= await this.photoService.getNewPhoto();
  }

  async onAddPosition(){
    this.currentLocation = await this.locationService.getMyLocation();
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
        );

        // submittedForm.resetForm(); 
        // this.myPhoto= undefined;

        this.router.navigateByUrl("/home");

    }else {
        alert("Le nom et la description sont obligatoires!");
    }


  }

}
