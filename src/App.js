import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Current from "./components/Current/Current";
import Hourly from "./components/Hourly/Hourly";
import Daily from "./components/Daily/Daily";

class App extends Component {

    state = {
        lat: "",
        lng: "",
        currentWeather: [],
        hourlyWeather: [],
        dailyWeather: [],
        dailyTomorrow: [],
        dailyDayAfter: [],
        currentIcon: "",
        currentIconAlt: ""
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => { 
            this.setState({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }, () => {
                // console.log("");
                // callback to update in real time
                this.apiCall();
            }); 
        });
    }

    // https://cors-anywhere.herokuapp.com/
    apiCall = () => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_API}/${this.state.lat},${this.state.lng}`)
        .then(res => {
            const result = res.data;
            console.log(result);
            this.setState({
                currentWeather: result.currently,
                currentIcon: require(`./components/Current/icons/${result.currently.icon}.png`),
                currentIconAlt: result.currently.icon,
                hourlyWeather: result.hourly,
                dailyWeather: result.daily,
                dailyTomorrow: result.daily.data[0],
                dailyDayAfter: result.daily.data[1]
            });
            console.log(this.state.currentIcon);
        })
    }


  render() {
    return (
      <div className="App">

        <h4>Latitude: {this.state.lat}</h4>
        <h4>Longitude: {this.state.lng}</h4>

        <Current 
            summary={this.state.currentWeather.summary}
            temp={this.state.currentWeather.temperature}
            feels={this.state.currentWeather.apparentTemperature}
            icon={this.state.currentIcon}
            iconAlt={this.state.currentIconAlt}
        />

        <br/>
        <br/>

        <Daily 
            summary={this.state.dailyWeather.summary}
            tomorrow={this.state.dailyTomorrow.summary}
            dayAfter={this.state.dailyDayAfter.summary}
        />

        <br/>
        <br/>

        <Hourly 
            summary={this.state.hourlyWeather.summary}
        />

        <br/>
        <br/>

        <div className="footer">
            <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        </div>

      </div>
    );
  }
}

export default App;