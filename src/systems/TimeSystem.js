// Time System - Manages day/night cycle, seasons, and weather

import { SEASONS } from '../utils/Constants.js';

export class TimeSystem {
  constructor() {
    this.currentTime = 0; // milliseconds since game start
    this.dayDuration = 1200000; // 20 minutes = 1 day
    this.yearDuration = 1200000 * 360; // 360 days per year
    this.currentSeason = SEASONS.SPRING;
    this.currentWeather = 'clear';
    this.weatherDuration = 0;
  }

  update(delta) {
    this.currentTime += delta;
    this.updateSeason();
    this.updateWeather();
  }

  updateSeason() {
    const dayOfYear = (this.currentTime % this.yearDuration) / (this.yearDuration / 360);
    
    if (dayOfYear < 90) {
      this.currentSeason = SEASONS.SPRING;
    } else if (dayOfYear < 180) {
      this.currentSeason = SEASONS.SUMMER;
    } else if (dayOfYear < 270) {
      this.currentSeason = SEASONS.FALL;
    } else {
      this.currentSeason = SEASONS.WINTER;
    }
  }

  updateWeather() {
    this.weatherDuration--;
    
    if (this.weatherDuration <= 0) {
      const weathers = ['clear', 'rainy', 'cloudy', 'snowy'];
      this.currentWeather = weathers[Math.floor(Math.random() * weathers.length)];
      this.weatherDuration = Math.random() * 1000 + 500;
    }
  }

  getGameTime() {
    const daysSinceStart = this.currentTime / this.dayDuration;
    const hourOfDay = (daysSinceStart % 1) * 24;
    const dayOfYear = (this.currentTime % this.yearDuration) / (this.yearDuration / 360);
    const year = Math.floor(this.currentTime / this.yearDuration);

    return {
      hour: Math.floor(hourOfDay),
      day: Math.floor(dayOfYear),
      year,
      season: this.currentSeason,
      weather: this.currentWeather,
    };
  }

  isDaytime() {
    const gameTime = this.getGameTime();
    const hour = gameTime.hour;
    return hour >= 6 && hour < 18;
  }

  isNighttime() {
    return !this.isDaytime();
  }
}
