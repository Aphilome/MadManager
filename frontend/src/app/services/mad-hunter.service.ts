import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";
import {IProperty} from "../property/IProperty.interface";

@Injectable({
  providedIn: 'root'
})
export class MadHunterService {

  constructor(private http: HttpClient) { }

  getAllProperties(typeOfEmployment: number): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map((data: any) => {
        const propertiesArray: Array<IProperty> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && (data[id].TypeOfEmployment === typeOfEmployment || typeOfEmployment === 0)) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    )
  }
}
