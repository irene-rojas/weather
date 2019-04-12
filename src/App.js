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
        tomorrowWeather: [],
        tomorrowIcon: "",
        tomorrowIconAlt: "",
        tomorrowUnixTime: "",
        tomorrowDate: "",
        // daily - next day
        nextDay: [],
        nextDayIcon: "",
        nextDayIconAlt: "",
        nextDayUnixTime: "",
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
                // hourly
                hourlyWeather: result.hourly,
                // daily - summary
                dailyWeather: result.daily,
                // daily - tomorrow
                tomorrowWeather: result.daily.data[1],
                tomorrowIcon: require(`./components/Daily/icons/${result.daily.data[1].icon}.png`),
                tomorrowIconAlt: result.daily.data[1].icon,
                tomorrowUnixTime: result.daily.data[1].time,
                // ----------------
                nextDay: result.daily.data[2],
                nextDayIcon: require(`./components/Daily/icons/${result.daily.data[2].icon}.png`),
                nextDayIconAlt: result.daily.data[2].icon,
                nextDayUnixTime: result.daily.data[2].time,

            });
            this.getDates();
        })
    }

    getDates = () => {
        // const currentUnix = this.state.currentUnixTime;
        const today = moment.unix(this.state.currentUnixTime).format('LL');
        const tomorrow = moment.unix(this.state.tomorrowUnixTime).format('LL');
        const nextDay = moment.unix(this.state.nextDayUnixTime).format('LL');
        this.setState({
            currentDate: today,
            tomorrowDate: tomorrow,
            nextDayDate: nextDay
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
            tomorrowDate={this.state.tomorrowDate}
            tomorrow={this.state.tomorrowWeather.summary}
            nextDayDate={this.state.nextDayDate}
            nextDay={this.state.nextDay.summary}
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