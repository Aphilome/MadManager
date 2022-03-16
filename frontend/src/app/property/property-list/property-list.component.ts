import { Component, OnInit } from '@angular/core';
import {MadHunterService} from "src/app/services/mad-hunter.service";
import {IProperty} from "../IProperty.interface";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties!: Array<IProperty>;

  constructor(private madHunter: MadHunterService) { }

   ngOnInit(): void {
    this.madHunter.getAllProperties().subscribe(
      data=>{
        this.properties = data;
        console.log(data);
      }, error => {
        console.log('httpError');
        console.log(error);
      }
    );
  }
}
