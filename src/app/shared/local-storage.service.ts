import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


const MY_FAVORITES = 'myFavorites';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  constructor(private toastrSvc: ToastrService) {
    this.initialStorrage();
  }

  private initialStorrage():void{
    const currents = JSON.parse(localStorage.getItem(MY_FAVORITES));
    if(!currents){
      localStorage.setItem(MY_FAVORITES, JSON.stringify([]));
    }
  }
}
