import { Component, Output } from '@angular/core';
import { WeatherDataService } from './weather-data.service';
import { WeatherData } from './Components/weather-widget-main/weather-widget-main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  allWeatherData: Object[] = [];
  isLoaded: boolean = false;
  currentWeatherData: Object = {};
  lat: number = 0;
  lng: number = 0;

  constructor(private weatherData: WeatherDataService) {}

  ngOnInit() {
    this.getPosition();
  }
  sharedData(data: WeatherData) {
    this.transformWeatherData(data);
    this.allWeatherData.push(data);
  }

  public getPosition() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.setWeatherData();
      },
      (err) => console.log(err)
    );
  }

  public async setWeatherData() {
    this.weatherData.getWeatherData(this.lat, this.lng).subscribe((data) => {
      this.transformWeatherData(data);
      this.allWeatherData.push(data);
      this.isLoaded = true;
    });
  }

  transformWeatherData(location: WeatherData) {
    let sunsetTime = new Date(location.sys.sunset * 1000);
    location.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    location.isDay = currentDate.getTime() < sunsetTime.getTime();
    location.temp_faren = (
      (location.main.temp - 273.15) * (9 / 5) +
      32
    ).toFixed(0);
    location.temp_min = (
      (location.main.temp_min - 273.15) * (9 / 5) +
      32
    ).toFixed(0);
    location.temp_max = (
      (location.main.temp_max - 273.15) * (9 / 5) +
      32
    ).toFixed(0);
    location.temp_feels_like = (
      (location.main.feels_like - 273.15) * (9 / 5) +
      32
    ).toFixed(0);
    return location;
  }

  title = 'angular-weather-widget';
}
