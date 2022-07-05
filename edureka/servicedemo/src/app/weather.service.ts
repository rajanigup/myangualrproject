import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  myUrl! : string
  myKey! : string
  reqUrl! : string

  constructor(private http:HttpClient) { 
  //  this.myurl='https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=f6d04bdfe52507ae3413b77cac52667a'
    this.myUrl = "https://api.openweathermap.org/data/2.5/weather"
    // ?q=london&appid="
    this.myKey = "f6d04bdfe52507ae3413b77cac52667a";
  }
  getTheWeatherDetails(cityName: string): Observable<any>{
    this.reqUrl = this.myUrl + '?q=' + cityName + '&appid=' + this.myKey
    return this.http.get(this.reqUrl)
  }
}
