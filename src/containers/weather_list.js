import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
    renderWeather(cityData) {
        const temp = cityData.list.map(weather => weather.main.temp * (9/5) - 459.67) 
        const humidity = cityData.list.map(weather=>weather.main.humidity)
        const pressure = cityData.list.map(weather=>weather.main.pressure)
        const { lon, lat } = cityData.city.coord

        return (
            <tr key={cityData.city.name}>
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                </td>                
                <Chart data={temp} color='red' units='F' />
                <Chart data={humidity} color='green' units='hPa' />
                <Chart data={pressure} color='blue' units='%' />
            </tr>
        )
    }
    
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

// function mapStateToProps(state) {
//     return { weather: state.weather }
// }

export default connect(mapStateToProps)(WeatherList)