import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Property } from 'src/models/property';
import { PropertyService } from 'src/services/property.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  properties: Property[];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.propertyService.propertyListing().subscribe(
      data => {
        this.properties = data;
      }
    );
  }

  DoDelete(id: number): void {
    this.propertyService.propertyDelete(id).subscribe(
      data => {
        alert("Success.");
      },
      error => {
        alert("Failed.");
      }
    );
  }
}
