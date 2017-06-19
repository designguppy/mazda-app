import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class BannerService {

  constructor(private _http: Http) 
  {

  }

  getBanners(){
    return this._http.get('./assets/first-maintenance.json')
      .map(res => res.json());
  }

}
