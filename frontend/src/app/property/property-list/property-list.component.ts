import { Component, OnInit } from '@angular/core';
import {MadHunterService} from "src/app/services/mad-hunter.service";
import {IProperty} from "../IProperty.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  private typeOfEmployment = 0;
  public properties!: Array<IProperty>;

  constructor(private route: ActivatedRoute, private madHunterService: MadHunterService) { }

   ngOnInit(): void {
    console.log(this.route.snapshot.url.toString());
    if (this.route.snapshot.url.toString() === "find-casual") {
      this.typeOfEmployment = 1; // Means type of employment is freelance
    } else if (this.route.snapshot.url.toString() === "find-employee") {
      this.typeOfEmployment = 2; // Means type of employment is employee
    }
    this.madHunterService.getAllProperties(this.typeOfEmployment).subscribe(
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
