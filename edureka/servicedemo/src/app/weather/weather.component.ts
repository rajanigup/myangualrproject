import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cityName!:string
  defaultCityName:string='London'
  weatherData!: Weather
  myKey!:string
  buttonValue!:boolean

  constructor(private myweatherserviceobject:WeatherService) { }

  ngOnInit(): void {
    this.myweatherserviceobject.getTheWeatherDetails(this.defaultCityName).subscribe(data=>this.weatherData=data)
    this.onClickReset()
  }
  
  onSubmitFetch()
  {
    this.myweatherserviceobject.getTheWeatherDetails(this.cityName).subscribe(data=>this.weatherData=data)
    this.onClickReset()

  }
  onDataIn(event:Event)
  {
    this.cityName = (<HTMLInputElement>event.target).value
    this.buttonValue=false
  }
  onClickReset()
  {
    this.buttonValue=true
  }

}
