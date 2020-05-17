import React, { Component } from "react";

export default class Connexion extends Component {
  state = {
    peseudo: "",
  };

  handelChange = (event) => {
    const pseudo = event.taget.value;
    this.setState({ pseudo })
  };

  render() {
    return (
      <div className="conenxionBox">
        <form className="connexion">
          <input
            value={this.state.peseudo}
            onChange={this.handelChange}
            placeholder="Username"
            type="text"
            required
          ></input>
          <button type="submit">GO</button>
        </form>
      </div>
    )
  }
}
