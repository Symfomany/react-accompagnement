import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import i18n from "./i18n"; // initialized i18next instance
import Moment from "react-moment";
import "moment-timezone";
const { Translate, Localize } = require("react-i18nify");

class App extends Component {
  constructor(props) {
    super(props);
    this.changeLangue = this.changeLangue.bind(this);
  }

  changeLangue() {
    console.log("ok");
    i18n.setLocale("en");
  }

  render() {
    const dateToFormat = 1523646256;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            <Moment unix tz="Africa/Abidjan">
              {dateToFormat}
            </Moment>
          </h1>
        </header>
        <Translate value="application.title" />
        <Translate value="application.title" />
        <Translate value="application.hello" name="Aad" />
        <Translate value="export" count={1} />
        <Translate value="export" count={2} />
        <Translate value="two_lines" dangerousHTML />
        <span>
          Regel 1<br />Regel 2
        </span>
        <Translate value="application.title" tag="h1" />
        <Localize value="2015-09-03" dateFormat="date.long" />
        <Localize value="2015-09-03" dateFormat="date.long" tag="div" />
        <Localize
          value={10 / 3}
          options={{
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }}
        />

        <button onClick={this.changeLangue}>Changer</button>
      </div>
    );
  }
}

export default App;
