import React, { Component } from 'react'
import SearchBar from '../containers/SearchBar'
import Weather_List from '../containers/Weather_list'

export default class MainApp extends Component{
    render(){
        return (
            <div>
                <SearchBar/><br/><br/>
                <Weather_List/>
            </div>
        )
    }
}