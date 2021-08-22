import { Component, OnInit } from '@angular/core';
import { Property } from 'src/models/property';
import { PropertyService } from 'src/services/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  properties: Property[];

  constructor(private propertyService:PropertyService) { }

  ngOnInit(): void {
   this.propertyService.propertyAll().subscribe(
       data => {
          this.properties=data;
       }
   );
  }

}
