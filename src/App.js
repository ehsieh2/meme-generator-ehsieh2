import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Control from "./components/Control";
import Output from "./components/Output";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      topText: "",
      bottomText: "",
    };
  }

  // pull data from Control, update App's state
  updateMeme = (data) => {
    this.setState(data);
  };

  render() {
    return (
      <>
        <Header />
        <Control updateUI={this.updateMeme} />
        <Output displayData={this.state} />
        <Footer />
      </>
    );
  }
}

export default App;
