import React from "react";

import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    const PLACES = [
      {
        name: "Kazan",
        id: "551487",
      },
    ];
    return (
      <div className="App">
        <Header></Header>
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              console.log(index);
            }}
          >
            {place.name}
          </button>
        ))}
        <Weather city="551487"></Weather>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
