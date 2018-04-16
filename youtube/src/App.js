import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import YoutubeLive from "youtube-live-react";
import StripeCheckout from "react-stripe-checkout";

class App extends Component {
  onToken = token => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <StripeCheckout
            token={this.onToken}
            stripeKey="pk_test_lkvHhTOvX022LiCVmdR6luih"
          />
          <YoutubeLive
            iframeWidth={400}
            iframeHeight={300}
            maxResults={50}
            youtubeChannelId="UCi99G_0QPx5sYsK8zdvQzfw"
            googleApiKey="AIzaSyBGfniDyt3mmUTQIBpO2DLNbaMrgnUBRiY"
          />
        </div>
      </div>
    );
  }
}

export default App;
