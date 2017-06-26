import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class NavigationService {

  private el;

  constructor(private _http: Http) 
  {

  }

  getNavigation(){
    return this._http.get('./assets/navigation.json')
      .map(res => res.json());
  }

  getProject(path)
  {
    this.el=this._http.get(path)
      .map(res => res.json());
  }

  getElement (){
    return this.el;

  }
 
}
