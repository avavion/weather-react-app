import React from "react";

import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return <div className="App">
      <Header></Header>
      <Weather></Weather>
      <Footer></Footer>
    </div>;
  }
}

export default App;
