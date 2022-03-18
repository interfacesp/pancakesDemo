import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }


  async getMyLocation(){
      const myPosition =await Geolocation.getCurrentPosition();
      const myLocation= {
        lati: myPosition.coords.latitude,
        longi: myPosition.coords.longitude
      }
      return myLocation;
  }

}
