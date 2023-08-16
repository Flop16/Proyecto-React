import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';

class ApiClima extends Component {
    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: 0,
        city: '',
        country: '',
        error: null
    };

    getWeather = async (e) => {
        e.preventDefault();
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        if (!cityValue || !countryValue) {
            this.setState({
                error: 'Please enter both City and Country.'
            });
            return;
        }

        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=1b355656a1e47ba184fb5ac1a575e608&units=metric`;

        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Weather data not available');
            }
            const data = await response.json();

            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            });
        } catch (error) {
            this.setState({
                error: 'Error de escritura de la ciudad o país, prueba con las mayúsculas iniciales e intenta de nuevo.'
            });
        }
    }

    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <WeatherForm
                            getWeather={this.getWeather}
                        />
                        <WeatherInfo {...this.state} />
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ApiClima;