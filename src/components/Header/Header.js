import React from "react";
import "./Header.css"

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <nav className="header-nav">
            <div className="header-nav-logo">
              <h1 className="header-nav-logo__title">Weather App</h1>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
