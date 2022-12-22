import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
// import * as data from '../data.json';
import { NgForm } from '@angular/forms';
import { WeatherDataService } from '../../weather-data.service';
import { WeatherData } from '../weather-widget-main/weather-widget-main.component';
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  @Output() sharedData = new EventEmitter<WeatherData>();
  name = '';
  currentWeatherData?: WeatherData;

  constructor(private weatherData: WeatherDataService) {}
  ngOnInit() {}
  location: Object = {};

  public async handleAddressChange(address: Address) {
    const lat = address.geometry.location.lat();
    const lng = address.geometry.location.lng();
    this.weatherData.getWeatherData(lat, lng).subscribe((data) => {
      this.currentWeatherData = data;
      console.log(this.currentWeatherData);
    });
  }

  onSubmit(f: NgForm) {
    this.name = '';
    this.sharedData.emit(this.currentWeatherData);
  }
}
