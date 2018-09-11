import React, { Component } from "react";
import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";

export default class App extends Component {
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h1>Five Day Weather Average (U.S.)</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
