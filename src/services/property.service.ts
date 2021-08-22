import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from 'src/models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  serverUrl = "https://localhost:44330/api/property/";

  constructor(private http: HttpClient) { }

  propertyList(property: Property): Observable<any> {
    return this.http.post<any>(this.serverUrl + "list", { Title: property.title, Type: property.type, Province: property.province, City: property.city, Address: property.address, Meters: property.meters, Price: property.price, Deal: property.deal, Description: property.description });
  }
  propertyListing(): Observable<Property[]> {
    return this.http.get<Property[]>(this.serverUrl + "get1");
  }
  propertyAll(): Observable<Property[]> {
    return this.http.get<Property[]>(this.serverUrl + "get2");
  }
  propertyDelete(id: number): Observable<any> {
    return this.http.delete<any>(this.serverUrl + "delete" + "/" + id);
  }
}
