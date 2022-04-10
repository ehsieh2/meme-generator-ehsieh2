import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: "",
      bottom: "",
    };
  }

  changeTop = (event) => {
    this.setState({ top: event.target.value });
  };

  changeBottom = (event) => {
    this.setState({ bottom: event.target.value });
  };

  fetchMeme = async (event) => {
    event.preventDefault();
    const memeAPI = "https://api.imgflip.com/get_memes";

    try {
      const response = await axios.get(memeAPI);
      const data = response.data.data;
      const image = data.memes[Math.floor(Math.random() * data.memes.length)];
      const dataUpdate = {
        image: image.url,
        topText: this.state.top,
        bottomText: this.state.bottom,
      };
      // pass data to parent component (App)
      this.props.updateUI(dataUpdate);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <section className="section">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input is-large is-fullwidth is-family-monospace"
              id="top-input"
              placeholder="Top text"
              type="text"
              onChange={this.changeTop}
              value={this.state.top}
            />
          </div>
        </div>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input is-large is-fullwidth is-family-monospace"
              id="bottom-input"
              placeholder="Bottom text"
              type="text"
              onChange={this.changeBottom}
              value={this.state.bottom}
            />
          </div>
        </div>
        <div className="field has-addons">
          <div className="control is-expanded">
            <button
              className="button is-link is-large is-fullwidth"
              id="go-btn"
              onClick={this.fetchMeme}
            >
              Go!
            </button>
          </div>
        </div>
      </section>
    );
  }
}
export default Control;
Control.propTypes = {
  updateUI: PropTypes.func.isRequired,
};
