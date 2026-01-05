export interface MainWeatherData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface WeatherDescription {
    main: string;
    description: string;
    icon: string;
}

export interface WindData {
    speed: number;
    deg: number;
}

export interface WeatherResponse {
    weather: WeatherDescription[];
    main: MainWeatherData;
    wind: WindData;
    name: string;
    dt: number;
}