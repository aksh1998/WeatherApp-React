import React from 'react';
const api = {
  key: "3fe71c66a17773f8b69808bf3e79aeea",
  base: "https://api.openweathermap.org/data/2.5/"
}

class App extends React.Component{
  // const [query, setQuery] = useState('');
  // const [weather, setWeather] = useState({});
  state = {
    query: '',
    weather: {},
  }
  
  componentDidMount(){
    fetch(`${api.base}weather?q=${'manali'}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            this.setState({weather:result});
            this.setState({query:''});
            console.log(result);
          });
  }
  
  render(){
    const search = evt => {
      if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${this.state.query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            this.setState({weather:result});
            this.setState({query:''});
            console.log(result);
          });
      }
    }
    const dateBuilder = (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
  
      return `${day} ${date} ${month} ${year}`
    }
    return (
      <div className={(typeof this.state.weather.main != "undefined") ? ((this.state.weather.main.temp > 8) ? 'app warm' : 'app') : 'app'}>
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => this.setState({query:(e.target.value)})}
              value={this.state.query}
              onKeyPress={search}
            />
          </div>
          {(typeof this.state.weather.main != "undefined") ? (
            <div>
              <div className="location-box">
                <div className="location">{this.state.weather.name}, {this.state.weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(this.state.weather.main.temp)}°c
              </div>
                <div className="weather">{this.state.weather.weather[0].main}</div>
              </div>
            </div>
          ) : ('')}
        </main>
      </div>
    );
  }
  
}

export default App;