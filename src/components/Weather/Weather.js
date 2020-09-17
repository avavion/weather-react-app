import React from "react";

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
    };
  }

  componentDidMount() {
    const CITY_ID = this.props.city;
    const URL = `http://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=62d059fb9ab82cd478f0dafa0d4a5286&units=imperial`;

    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ weatherData: json });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <section className="section weather">
        <div className="container">
          <div className="weather__inner">
            {!this.state.weatherData ? <h1>Loading</h1> : <h1>Город</h1>}
          </div>
        </div>
      </section>
    );
  }
}

export default Weather;
