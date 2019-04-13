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
        // daily - day 1
        day1Weather: [],
        day1Icon: "",
        day1IconAlt: "",
        day1UnixTime: "",
        day1Date: "",
        // daily - day 2
        day2Weather: [],
        day2Icon: "",
        day2IconAlt: "",
        day2UnixTime: "",
        day2Date: "",
        // daily - day 3
        day3Weather: [],
        day3Icon: "",
        day3IconAlt: "",
        day3UnixTime: "",
        day3Date: "",


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

                // daily - day2
                day2Weather: result.daily.data[2],
                day2Icon: require(`./components/Daily/icons/${result.daily.data[2].icon}.png`),
                day2IconAlt: result.daily.data[2].icon,
                day2UnixTime: result.daily.data[2].time,

                // daily - day3
                day3Weather: result.daily.data[3],
                day3Icon: require(`./components/Daily/icons/${result.daily.data[3].icon}.png`),
                day3IconAlt: result.daily.data[3].icon,
                day3UnixTime: result.daily.data[3].time,

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
        const day2Date = moment.unix(this.state.day2UnixTime).format('LL');
        const day3Date = moment.unix(this.state.day3UnixTime).format('LL');
        this.setState({
            currentDate: today,
            day1Date: day1Date,
            day2Date: day2Date,
            day3Date: day3Date
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

            day3Date={this.state.day3Date}
            day3Weather={this.state.day3Weather.summary}
            day3Temp={this.state.day3Weather.temperatureHigh}
            day3Feels={this.state.day3Weather.apparentTemperatureHigh}
            day3Icon={this.state.day3Icon}
            day3IconAlt={this.state.day3IconAlt}

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