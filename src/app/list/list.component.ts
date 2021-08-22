import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { Property } from 'src/models/property';
import { PropertyService } from 'src/services/property.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  property: Property;

  constructor(private router: Router, private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.property = new Property();
  }
  
  DoList(): void {
    this.propertyService.propertyList(this.property).subscribe(
      data => {
        alert("Success.");
        this.router.navigate(['dashboard/listing']);
      },
      error => {
        alert("Failed.");
      }
    );
  }
}
