import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class NavigationService {

  constructor(private _http: Http) 
  {

  }

  getNavigation(){
    return this._http.get('./assets/navigation.json')
      .map(res => res.json());
  }

  getProject(path)
  {
    return this._http.get(path)
      .map(res => res.json());
  }

}
