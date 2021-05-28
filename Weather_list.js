import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/Chart'

class Weather_List extends Component{

    renderWeather(cityData){
        const name = cityData.city.name
        const temp = cityData.list.map(weather => weather.main.temp)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidity = cityData.list.map(weather => weather.main.humidity)

        return(
            <tr key = {name}>
                <td>{name}</td>
                <td><Chart data = {temp} color='yellow' units='m'></Chart></td>
                <td><Chart data = {pressures} color='orange' units='hpa'></Chart></td>
                <td><Chart data = {humidity} color='black' units='%'></Chart></td>
            </tr>
        )
    }

    render(){
        return(
            <div className="container">
               <div className = "row">
                    <div className="col-2">

                    </div>
                    <div className="col-6">
                        <table className = "table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">City</th>
                                    <th scope="col">Temperature</th>
                                    <th scope="col">Pressure (hpa)</th>
                                    <th scope="col">Humidity (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.weather.map(this.renderWeather)}
                            </tbody>
                        </table>
                    </div>
               </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(Weather_List)