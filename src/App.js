import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Current from "./components/Current/Current";
// import Hourly from "./components/Hourly/Hourly";
import Daily from "./components/Daily/Daily";
import moment from 'moment';

class App extends Component {

    state = {
        // location
        lat: "",
        lng: "",
        // current
        currentWeather: [],
        currentIcon: "",
        currentIconAlt: "",
        currentUnixTime: "",
        currentDate: "",
        // daily summary
        dailyWeather: [],
        // daily - tomorrow
        day1Weather: [],
        day1Icon: "",
        day1IconAlt: "",
        day1UnixTime: "",
        day1Date: "",
        // daily - next day
        day2Weather: [],
        day2Icon: "",
        day2IconAlt: "",
        day2UnixTime: "",
        day2Date: "",

        // hourly
        hourlyWeather: [],
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

    apiCall = () => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_API}/${this.state.lat},${this.state.lng}`)
        .then(res => {
            const result = res.data;
            console.log(result);
            this.setState({
                // current
                currentWeather: result.currently,
                currentIcon: require(`./components/Current/icons/${result.currently.icon}.png`),
                currentIconAlt: result.currently.icon,
                currentUnixTime: result.currently.time,
                // daily - summary
                dailyWeather: result.daily,
                // daily - day1
                day1Weather: result.daily.data[1],
                day1Icon: require(`./components/Daily/icons/${result.daily.data[1].icon}.png`),
                day1IconAlt: result.daily.data[1].icon,
                day1UnixTime: result.daily.data[1].time,
                // ----------------
                day2Weather: result.daily.data[2],
                day2WeatherIcon: require(`./components/Daily/icons/${result.daily.data[2].icon}.png`),
                day2WeatherIconAlt: result.daily.data[2].icon,
                day2WeatherUnixTime: result.daily.data[2].time,
                // hourly
                hourlyWeather: result.hourly,
            });
            this.getDates();
        })
    }

    getDates = () => {
        // const currentUnix = this.state.currentUnixTime;
        const today = moment.unix(this.state.currentUnixTime).format('LL');
        const day1Date = moment.unix(this.state.day1UnixTime).format('LL');
        const day2Date = moment.unix(this.state.day2WeatherUnixTime).format('LL');
        this.setState({
            currentDate: today,
            day1Date: day1Date,
            day2Date: day2Date
        });
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
            time={this.state.currentDate}
        />

        <br/>
        <br/>

        <Daily 
            summary={this.state.dailyWeather.summary}

            day1Date={this.state.day1Date}
            day1Weather={this.state.day1Weather.summary}
            day1Temp={this.state.day1Weather.temperatureHigh}
            day1Feels={this.state.day1Weather.apparentTemperatureHigh}
            day1Icon={this.state.day1Icon}
            day1IconAlt={this.state.day1IconAlt}

            day2Date={this.state.day2Date}
            day2Weather={this.state.day2Weather.summary}
            day2Temp={this.state.day2Weather.temperatureHigh}
            day2Feels={this.state.day2Weather.apparentTemperatureHigh}
            day2Icon={this.state.day2Icon}
            day2IconAlt={this.state.day2IconAlt}

        />

        <br/>
        <br/>

        {/* <Hourly 
            summary={this.state.hourlyWeather.summary}
        /> */}

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