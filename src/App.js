import React from 'react';
import Weather from './Componenet/WeatherComponent';
import { FetchDataFromApi, FetchDataFromCoordinateApi } from './WeatherApi';

class App extends React.Component {
  state = {
    query: '',
    weather: {},
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      var result = await FetchDataFromCoordinateApi(position.coords.latitude, position.coords.longitude);
      this.setState({ weather: result });
      this.setState({ query: '' });
    });
  }

  render() {
    const search = async (evt) => {
      if (evt.key === "Enter") {
        var result = await FetchDataFromApi(this.state.query);
        this.setState({ weather: result });
        this.setState({ query: '' });
      }
    }

    return (
      <div className={(typeof this.state.weather.main != "undefined") ? ((this.state.weather.main.temp > 8) ? 'app warm' : 'app') : 'app'}>
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => this.setState({ query: (e.target.value) })}
              value={this.state.query}
              onKeyPress={search}
            />
          </div>
          <Weather weather={this.state.weather} />
        </main>
      </div>
    );
  }

}

export default App;